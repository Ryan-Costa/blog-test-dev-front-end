import api from '@/services/api';
import { useEffect, useState } from 'react';

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    api.get<T>(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return { data };
}
