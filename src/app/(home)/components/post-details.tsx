import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IPost } from '@/types';
import {
  CopyCheckIcon,
  Edit2Icon,
  Edit3Icon,
  EditIcon,
  FileText,
  PencilIcon,
} from 'lucide-react';
import { useState } from 'react';

interface EditPostProps {
  data: IPost;
}

const PostDetails: React.FC<EditPostProps> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileText />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1225px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Post detail</DialogTitle>
          <DialogDescription className="text-lg">
            Make read the details to your post here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-4 gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-lg">
              Post Title
            </Label>
            <p className="col-span-3 w-5/6 text-lg border-[1px] p-4 opacity-60">
              {data.title}
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="flex items-center justify-end gap-2">
              <Label
                htmlFor="name"
                className="text-right text-lg flex items-center justify-between"
              >
                Slug
              </Label>
              <Button variant="outline">
                <CopyCheckIcon className="h-4 w-4" />
              </Button>
            </div>
            <p className="col-span-3 w-5/6 text-lg border-[1px] p-4 opacity-60">
              {data.slug}
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-lg">
              Created At
            </Label>
            <p className="col-span-3 w-5/6 text-lg border-[1px] p-4 opacity-60">
              {new Date(data.created_at!).toLocaleDateString()}
              {' - '}
              {new Date(data.created_at!).toLocaleTimeString()}
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-lg">
              Published At
            </Label>
            <p className="col-span-3 w-5/6 text-lg border-[1px] p-4 opacity-60">
              {new Date(data.published_at).toLocaleDateString()}
              {' - '}
              {new Date(data.published_at).toLocaleTimeString()}
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-lg">
              Updated At
            </Label>
            <p className="col-span-3 w-5/6 text-lg border-[1px] flex p-4 opacity-60">
              {new Date(data.updated_at!).toLocaleDateString()}
              {' - '}
              {new Date(data.updated_at!).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PostDetails;
