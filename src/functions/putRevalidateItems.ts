// import PostService from '@/services/posts';
// import { revalidatePath } from 'next/cache';
// import { toast } from 'react-toastify';

// export async function putRevalidateItems(url: string, data: any) {
//   return PostService.update(url, data)
//     .then((response) => {
//       revalidatePath(url);
//       return response.data;
//     })
//     .catch((error) => {
//       if (error.response) {
//         return error.response.data;
//       } else {
//         toast.error('Unexpected error | ', error.message);
//       }
//     });
// }
