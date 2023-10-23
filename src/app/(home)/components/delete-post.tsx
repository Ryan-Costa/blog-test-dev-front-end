import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import { delRevalidate } from '@/functions/delRevalidate';
import ReactLoading from 'react-loading';

type DeleteButtonProps = {
  postsId: number;
};
const DeletePost: React.FC<DeleteButtonProps> = ({ postsId }) => {
  const [, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const handleDeletePost = async () => {
    try {
      setLoading(true);
      startTransition(async () => {
        await delRevalidate(`/posts/${postsId}`, postsId);
        toast.success('post successfully removed', {
          autoClose: 3000,
          theme: 'dark',
        });
        setLoading(false);
      });
    } catch (error) {
      toast.error('error removing post', {
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleDeletePost}
      disabled={loading && true}
    >
      {loading ? (
        <ReactLoading type={'spin'} color={'#7a7a7a'} height={20} width={20} />
      ) : (
        <TrashIcon />
      )}
    </Button>
  );
};

export default DeletePost;
