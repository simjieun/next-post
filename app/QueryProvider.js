"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";

const queryClient = getQueryClient();

export default function TanstackQueryWrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
