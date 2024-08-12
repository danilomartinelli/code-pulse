"use client";

import { trpc } from "@/lib/client/trpc";
import { getBaseUrl } from "@/lib/client/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import React, { useState } from "react";
import SuperJSON from "superjson";

type TrpcProviderProps = {
  children: React.ReactNode;
  cookies: string;
};

function getTrpcUrl() {
  return getBaseUrl() + "/api/trpc";
}

const TrpcProvider = ({ children, cookies }: TrpcProviderProps) => {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: SuperJSON,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          url: getTrpcUrl(),
          headers() {
            return {
              cookie: cookies,
              "x-trpc-source": "react",
            };
          },
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcProvider;
