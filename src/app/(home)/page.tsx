import api from '@/services/api';
import { columns } from './columns';
import { PostsTable } from './posts-table';
import PostService from '@/services/posts';

export interface PostsProps {
  data: {
    id: number;
    title: string;
    slug: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
}

export async function getData() {
  try {
    const res = await PostService.getAll();
    return res.data;
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}

export default async function Home() {
  const posts = await getData();

  if (!posts) {
    return null;
  }

  console.log('>>>>>>>>>>>>>>>>>>>>>>>', posts);

  return (
    <div className="p-40">
      <PostsTable columns={columns} data={posts} />
    </div>
  );
}
