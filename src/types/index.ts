export interface IPost {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  created_at?: string;
  updated_at?: string;
}
export interface PostsProps {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  featured_until: null;
  youtube_lin: null;
  primary_text: string;
  secondary_text: string;
  seo_title: string;
  seo_tags: string;
  seo_description: null;
  route: {
    url: string;
    full_url: string;
    created_at: string;
    updated_at: string;
  };
  main_image: null;
  images: [];
  created_at: string;
  updated_at: string;
}
