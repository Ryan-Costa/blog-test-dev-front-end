'use client';

import { IPost } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ChevronsUpDownIcon } from 'lucide-react';
import EditPost from './components/edit-post';
import PostDetails from './components/post-details';
import DeletePost from './components/delete-post';
import PostService from '@/services/posts';

export const columns: ColumnDef<IPost>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          className="uppercase"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          title
          <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'slug',
    header: () => <p className="uppercase w-[100px]">tag</p>,
    cell: () => <div className="lowercase">--</div>,
  },
  {
    accessorKey: 'created_at',
    header: () => <div className="text-center uppercase">Created At</div>,
    cell: ({ row }) => {
      const createdAtDate = new Date(row.getValue('created_at'));
      const formatter =
        createdAtDate.toLocaleDateString('pt-BR') +
        ' - ' +
        createdAtDate.toLocaleTimeString('pt-BR');

      return <div className="text-center font-medium">{formatter}</div>;
    },
  },
  {
    accessorKey: 'updated_at',
    header: () => <div className="text-center uppercase">Updated At</div>,
    cell: ({ row }) => {
      const updatedAtDate = new Date(row.getValue('updated_at'));
      const formatter =
        updatedAtDate.toLocaleDateString('pt-BR') +
        ' - ' +
        updatedAtDate.toLocaleTimeString('pt-BR');

      return <div className="text-center font-medium">{formatter}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    header: () => <div className="text-center uppercase">Acitons</div>,
    cell: ({ row }) => {
      const posts = row.original;
      const postsId = row.original.id;

      return (
        <div className="flex items-center justify-center gap-2">
          <EditPost postsId={postsId} />
          <DeletePost postsId={postsId} />
          <PostDetails data={posts} />
        </div>
      );
    },
  },
];
