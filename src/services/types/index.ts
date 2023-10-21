import { IPost } from '@/types';

export type DefaultRequestType<T> = {
  status: string;
  message: string;
  data: T;
};

export interface DeletePostProps {
  data: IPost;
  onDelete: () => void;
}
