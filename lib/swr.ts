import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useMySWR(key: string) {
  return useSWR(key, fetcher);
}
