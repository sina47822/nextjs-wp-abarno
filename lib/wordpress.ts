export interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    featured_media: number;
    categories: number[]; 
    _embedded?: {
      "wp:featuredmedia"?: Array<{
        embeddable: boolean;
        href: string;
        source_url?: string; // اضافه کردن source_url که برای نمایش تصویر استفاده می‌شود
      }>;
    };}
  