import { IPost, PostsProps } from '@/types';
import api from '../api';
import { DefaultRequestType } from '../types';

const PostService = {
  getAll: async (): Promise<DefaultRequestType<IPost[]>> =>
    (await api.get('/posts')).data,
  getById: async (postId: number): Promise<DefaultRequestType<PostsProps>> =>
    (await api.get(`/posts/${postId}`)).data,
  create: async (post: Partial<IPost>): Promise<DefaultRequestType<IPost>> =>
    (await api.post('/posts', post)).data,
  update: async (
    postId: number,
    post: Partial<IPost>
  ): Promise<DefaultRequestType<IPost>> =>
    (await api.put(`/posts/${postId}`, post)).data,
  delete: async (postId: number): Promise<DefaultRequestType<IPost>> =>
    (await api.delete(`/posts/${postId}`)).data,
};

export default PostService;
