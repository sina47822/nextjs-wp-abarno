'use client';
import { useEffect, useState } from "react";
import { WPPost } from "@/lib/wordpress";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

interface BlogListProps {
  setActiveTab?: (tab: string) => void;
}

export default function BlogList() {
  // به media تایپ می‌دهیم که کلیدها عدد و مقدارها هر چیزی می‌توانند باشند
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [media, setMedia] = useState<{ [key: number]: any }>({});
  const router = useRouter();

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

    fetchPostsAndMedia();
  }, []);


  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">آخرین مقالات</h3>
          <button
            className="flex text-teal-500 text-sm font-medium cursor-pointer"
          >
            مشاهده همه <FaArrowLeft className="mr-1" />
          </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
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
                  مالی {/* یا هر دسته‌ای که می‌خوای اضافه کنی */}
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
    </div>
  );
}
