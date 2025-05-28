'use client';

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { FaClock } from "react-icons/fa";
import { WPPost } from "@/lib/wordpress";

const articlesPerPage = 6;

export default function BlogList() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<WPPost[]>([]);
  const [media, setMedia] = useState<{ [key: number]: any }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [categories, setCategories] = useState<{ [key: number]: string }>({});
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // گرفتن پست‌ها و مدیا
  useEffect(() => {
    async function fetchPostsAndMedia() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts`);
      const postsData = await res.json();
      setPosts(postsData);

      const mediaMap: { [key: number]: any } = {};
      await Promise.all(
        postsData.map(async (post: WPPost) => {
          if (post.featured_media) {
            const mediaRes = await fetch(
              `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${post.featured_media}`
            );
            const mediaData = await mediaRes.json();
            mediaMap[post.featured_media] = mediaData;
          }
        })
      );
      setMedia(mediaMap);
    }

    async function fetchCategories() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories`);
      const cats = await res.json();
      const catMap: { [key: number]: string } = {};
      cats.forEach((cat: any) => {
        catMap[cat.id] = cat.name;
      });
      setCategories(catMap);
    }

    fetchPostsAndMedia();
    fetchCategories();
  }, []);

  // فیلتر کردن پست‌ها به صورت مموریزه (تا فقط وقتی posts یا selectedCategory تغییر کرد محاسبه شود)
  const filteredPosts = useMemo(() => {
    if (selectedCategory === null) return posts;
    return posts.filter(post => post.categories.includes(selectedCategory));
  }, [posts, selectedCategory]);

  // وقتی دسته‌بندی تغییر می‌کنه صفحه‌بندی رو ریست کن
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // تعیین پست‌های قابل نمایش بر اساس صفحه و تعداد پست در هر صفحه
  useEffect(() => {
    const newVisible = filteredPosts.slice(0, currentPage * articlesPerPage);
    setVisiblePosts(newVisible);
  }, [filteredPosts, currentPage]);

  // بررسی اینکه آیا دکمه لود مور نمایش داده شود
  const hasMore = visiblePosts.length < filteredPosts.length && filteredPosts.length > articlesPerPage;

  // بارگذاری صفحه بعد
  const loadMoreArticles = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">آخرین مقالات</h3>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          همه دسته‌ها
        </Badge>

        {Object.entries(categories).map(([id, name]) => (
          <Badge
            key={id}
            variant={selectedCategory === Number(id) ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(Number(id))}
          >
            {name}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePosts.map((post) => {
          const mediaData = media[post.featured_media];
          const imgUrl = mediaData ? mediaData.source_url : "/images/landscape/landscape1.jpg";

          const title = post.title.rendered.replace(/(<([^>]+)>)/gi, "");
          const excerpt =
            post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").slice(0, 100) + "...";

          const date = new Date(post.date).toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          const categoryName =
            post.categories && post.categories.length > 0
              ? categories[post.categories[0]] || "بدون دسته‌بندی"
              : "بدون دسته‌بندی";

          return (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 cursor-pointer transition hover:shadow-md"
              onClick={() => router.push(`/blog/${post.slug}`)}
            >
              {imgUrl && (
                <img
                  src={imgUrl}
                  alt={title}
                  className="w-full h-48 object-cover object-top"
                />
              )}
              <div className="p-4">
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 mb-2">
                  {categoryName}
                </Badge>
                <h4 className="font-medium text-gray-800 mb-2 line-clamp-2">{title}</h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{date}</span>
                  <span className="flex">
                    <FaClock className="ml-1" />
                    زمان مطالعه ۵ دقیقه
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreArticles}
            className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            بارگذاری بیشتر
          </button>
        </div>
      )}
    </div>
  );
}
