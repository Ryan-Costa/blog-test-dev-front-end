import React from 'react';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import PostService from '@/services/posts';

type DeleteButtonProps = {
  postsId: number;
};
const DeletePost: React.FC<DeleteButtonProps> = ({ postsId }) => {
  const handleDeletePost = async () => {
    try {
      await PostService.delete(String(postsId));
      console.log('Post removido com sucesso');
    } catch (error) {
      console.error('Erro ao remover o post:', error);
    }
  };

  return (
    <Button variant="outline" onClick={handleDeletePost}>
      <TrashIcon />
    </Button>
  );
};

export default DeletePost;
