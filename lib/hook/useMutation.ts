import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: any;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T>(url: string): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
  });

  const call = (data: any) => {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  };

  return [call, { ...state }];
}
