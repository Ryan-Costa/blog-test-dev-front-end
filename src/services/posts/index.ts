import { IPost } from '@/types';
import api from '../api';
import { DefaultRequestType } from '../types';

const PostService = {
  getAll: async (): Promise<DefaultRequestType<IPost[]>> =>
    (await api.get('/posts')).data,
  getById: async (postId: string): Promise<DefaultRequestType<IPost>> =>
    (await api.get(`/posts/${postId}`)).data,
  create: async (post: Partial<IPost>): Promise<DefaultRequestType<IPost>> =>
    (await api.post('/posts', post)).data,
  update: async (
    postId: string,
    post: Partial<IPost>
  ): Promise<DefaultRequestType<IPost>> =>
    (await api.put(`/posts/${postId}`, post)).data,
  delete: async (postId: string): Promise<DefaultRequestType<IPost>> =>
    (await api.delete(`/posts/${postId}`)).data,
};

export default PostService;
