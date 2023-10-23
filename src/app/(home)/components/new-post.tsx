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
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatDateISO } from '@/helper/format-date-iso';
import PostService from '@/services/posts';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { DialogClose } from '@radix-ui/react-dialog';

const schemaNewPostForm = z.object({
  title: z.string().min(1, 'Enter the user name'),
  tags: z.string().min(1, 'Enter the tag name'),
  published_at: z.string(),
  primary_text: z.string().min(1, 'Enter the primary text'),
  secondary_text: z.string().min(1, 'Enter the secondary text'),
});

type NewPostFormProps = z.infer<typeof schemaNewPostForm>;

export function NewPost() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<NewPostFormProps>({
    resolver: zodResolver(schemaNewPostForm),
    defaultValues: {
      title: '',
      tags: '',
      published_at: new Date().toLocaleDateString(),
      primary_text: '',
      secondary_text: '',
    },
  });

  const handleFormSubmit = async (dataForm: NewPostFormProps) => {
    const dataFormFormatted = {
      ...dataForm,
      published_at: formatDateISO(dataForm.published_at),
      seo_title: dataForm.title,
      seo_tags: dataForm.tags,
    };

    try {
      await PostService.create(dataFormFormatted);
      router.refresh();
      toast.success('post added successfully', {
        autoClose: 3000,
        theme: 'dark',
      });
    } catch (error) {
      toast.error('error adding post', {
        autoClose: 3000,
        theme: 'dark',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => reset()}>
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>New Post</DialogTitle>
          <DialogDescription>Create your post here.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col gap-4"
        >
          <div
            className={`grid grid-cols-4 items-center gap-4 ${
              errors.title && 'border-red-500'
            }`}
          >
            <Label
              htmlFor="name"
              className={`text-right  ${
                errors.title && 'font-bold text-red-500 mb-5'
              }`}
            >
              Title
            </Label>
            <div className="col-span-3">
              <Input
                {...register('title')}
                id="title"
                className={` ${errors.title && 'border border-red-500'}`}
              />
              {errors.title && (
                <span className="text-sm text-right font-bold tracking-wide text-red-600">
                  {errors.title.message}
                </span>
              )}
            </div>
          </div>

          <div
            className={`grid grid-cols-4 items-center gap-4 ${
              errors.tags && 'border-red-500'
            }`}
          >
            <Label
              htmlFor="name"
              className={`text-right  ${
                errors.tags && 'font-bold text-red-500 mb-5'
              }`}
            >
              Tags
            </Label>
            <div className="col-span-3">
              <Input
                {...register('tags')}
                id="tags"
                className={` ${errors.tags && 'border border-red-500'}`}
              />
              {errors.tags && (
                <span className="text-sm text-right font-bold tracking-wide text-red-600">
                  {errors.tags.message}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Published At
            </Label>
            <Input
              {...register('published_at')}
              id="published_at"
              className="col-span-3"
              readOnly
              disabled
            />
          </div>

          <div
            className={`grid grid-cols-4 items-center gap-4 ${
              errors.primary_text && 'border-red-500'
            }`}
          >
            <Label
              htmlFor="name"
              className={`text-right  ${
                errors.primary_text && 'font-bold text-red-500 mb-5'
              }`}
            >
              Primary Text
            </Label>
            <div className="col-span-3">
              <Input
                {...register('primary_text')}
                id="primary_text"
                className={` ${errors.primary_text && 'border border-red-500'}`}
              />
              {errors.primary_text && (
                <span className="text-sm text-right font-bold tracking-wide text-red-600">
                  {errors.primary_text.message}
                </span>
              )}
            </div>
          </div>

          <div
            className={`grid grid-cols-4 items-center gap-4 ${
              errors.secondary_text && 'border-red-500'
            }`}
          >
            <Label
              htmlFor="name"
              className={`text-right  ${
                errors.secondary_text && 'font-bold text-red-500 mb-5'
              }`}
            >
              Secondary Text
            </Label>
            <div className="col-span-3">
              <Input
                {...register('secondary_text')}
                id="secondary_text"
                className={` ${
                  errors.secondary_text && 'border border-red-500'
                }`}
              />
              {errors.secondary_text && (
                <span className="text-sm font-bold tracking-wide text-red-600">
                  {errors.secondary_text.message}
                </span>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Create post</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
