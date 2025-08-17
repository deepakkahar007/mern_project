import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";

const client = new QueryClient();

export default function ReactQuery({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
