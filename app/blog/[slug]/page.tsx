'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { FaClock } from "react-icons/fa";
import parse from 'html-react-parser';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [media, setMedia] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPostData = async () => {
      const postRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}`);
      const postData = await postRes.json();

      if (postData.length > 0) {
        const singlePost = postData[0];
        setPost(singlePost);

        if (singlePost.featured_media) {
          const mediaRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/media/${singlePost.featured_media}`);
          const mediaData = await mediaRes.json();
          setMedia(mediaData.source_url);
        }

        if (singlePost.categories.length > 0) {
          const catRes = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2/categories/${singlePost.categories[0]}`);
          const catData = await catRes.json();
          setCategory(catData.name);
        }
      }
    };

    fetchPostData();
  }, [slug]);

  if (!post) return <div className="text-center py-10">در حال بارگذاری...</div>;

  const title = post.title.rendered;
  const content = post.content.rendered;
  const date = new Date(post.date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {media && (
        <img src={media} alt={title} className="w-full h-72 object-cover rounded-lg mb-6" />
      )}
      <div className="mb-4">
        {category && (
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
            {category}
          </Badge>
        )}
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{title}</h1>
        <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
          <FaClock />
          <span>{date}</span>
          <span>· زمان مطالعه ۵ دقیقه</span>
        </div>
      </div>
      <div className="prose prose-lg max-w-none text-gray-800 leading-8">
        {parse(content)}
      </div>
    </div>
  );
}
