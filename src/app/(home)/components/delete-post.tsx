import React from 'react';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import PostService from '@/services/posts';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type DeleteButtonProps = {
  postsId: number;
};
const DeletePost: React.FC<DeleteButtonProps> = ({ postsId }) => {
  const router = useRouter();
  const handleDeletePost = async () => {
    try {
      await PostService.delete(String(postsId));
      router.refresh();
      toast.success('post successfully removed', {
        autoClose: 3000,
        theme: 'dark',
      });
    } catch (error) {
      toast.error('error removing post', {
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  return (
    <Button variant="outline" onClick={handleDeletePost}>
      <TrashIcon />
    </Button>
  );
};

export default DeletePost;
