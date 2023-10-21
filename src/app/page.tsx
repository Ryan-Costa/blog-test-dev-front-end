'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import replaceHyphensWithSpaces from '@/helper/replaceHyphensWithSpaces';
import { useFetch } from '@/hook/useFetch';
import { PencilIcon, TrashIcon } from 'lucide-react';

interface PostsProps {
  data: {
    id: number;
    title: string;
    slug: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
}

export default function Home() {
  const { data } = useFetch<PostsProps>('/posts');

  const posts = data?.data || [];

  if (!posts) {
    return null;
  }

  console.log(posts);

  return (
    <div className="p-60">
      <Table className="border-y-[1px]">
        <TableHeader className="border-x-[1px]">
          <TableRow>
            <TableHead className="">TÍTULO DO CONTEÚDO</TableHead>
            <TableHead className="w-[140px]">TAG</TableHead>
            <TableHead className="w-[240px]">PUBLICAÇÃO</TableHead>
            <TableHead className="w-[240px]">ATUALIZAÇÃO</TableHead>
            <TableHead>AÇÕES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium border-x-[1px]">
                {post.title}
              </TableCell>
              <TableCell className="border-r-[1px]">--</TableCell>
              <TableCell className="border-r-[1px]">
                <div className="flex gap-2">
                  <div>{new Date(post.created_at).toLocaleDateString()}</div>-
                  <div>{new Date(post.created_at).toLocaleTimeString()}</div>
                </div>
              </TableCell>
              <TableCell className="w-[240px] border-r-[1px]">
                <div className="flex gap-2">
                  <div>{new Date(post.published_at).toLocaleDateString()}</div>-
                  <div>{new Date(post.published_at).toLocaleTimeString()}</div>
                </div>
              </TableCell>
              <TableCell className="flex gap-4 border-x-[1px]">
                <Button className="hover:bg-primary" variant="outline">
                  <PencilIcon />
                </Button>
                <Button className="hover:bg-primary" variant="outline">
                  <TrashIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow className="bg-primary">
          <TableCell>{posts.length} POSTAGENS</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>
            <div className="flex">
              <Button variant="outline">ANTERIOR</Button>
              <Button variant="outline">1</Button>
              <Button variant="outline">PRÓXIMO</Button>
            </div>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}
