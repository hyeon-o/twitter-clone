import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useMySWR<T = any>(key: string) {
  return useSWR<T>(key, fetcher);
}
