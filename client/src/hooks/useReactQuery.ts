import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";

export function useReactQuery<TData, TError = Error>(
  queryKey: (string | number)[],
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
): UseQueryResult<TData, TError> {
  return useQuery<TData, TError>({
    queryKey,
    queryFn,
    ...options,
  });
}
