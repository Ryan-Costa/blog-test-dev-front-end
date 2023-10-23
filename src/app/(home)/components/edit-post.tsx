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
import { putRevalidate } from '@/functions/putRevalidate';
import PostService from '@/services/posts';
import { PostsProps } from '@/types';
import { PencilIcon } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';

interface EditPostProps {
  postsId: number;
}

const EditPost: React.FC<EditPostProps> = ({ postsId }) => {
  const [post, setPost] = useState<Partial<PostsProps>>({});
  const [loading, setLoading] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const response = await PostService.getById(postsId);
        setPost(response.data);
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
      }
    };

    fetchPostById();
  }, [postsId]);

  const handleSaveEditingChanges = async () => {
    try {
      setLoading(true);
      startTransition(async () => {
        await putRevalidate(`/posts/${postsId}`, postsId, post);
        toast.success('post updated successfully', {
          autoClose: 3000,
          theme: 'dark',
        });
        setLoading(false);
      });
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
          {loading ? (
            <ReactLoading
              type={'spin'}
              color={'#7a7a7a'}
              height={20}
              width={20}
            />
          ) : (
            <PencilIcon />
          )}
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
              disabled={loading && true}
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
