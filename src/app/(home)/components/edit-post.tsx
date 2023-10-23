import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PostService from '@/services/posts';
import { IPost } from '@/types';
import { PencilIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface EditPostProps {
  data: IPost;
}

const EditPost: React.FC<EditPostProps> = ({ data }) => {
  const [post, setPost] = useState<Partial<IPost>>(data);
  const router = useRouter();

  const handleSaveEditingChanges = async () => {
    try {
      await PostService.update(data.id, post);
      toast.success('post updated successfully', {
        autoClose: 3000,
        theme: 'dark',
      });
      router.refresh();
    } catch (error) {
      toast.error('error updating post', {
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PencilIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1225px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit post</DialogTitle>
          <DialogDescription className="text-lg">
            Make changes to your post here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid py-4 w-full">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-lg">
              Post Title
            </Label>
            <Input
              id="name"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="col-span-3 w-3/3 text-lg"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              className="text-xl"
              onClick={handleSaveEditingChanges}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPost;
