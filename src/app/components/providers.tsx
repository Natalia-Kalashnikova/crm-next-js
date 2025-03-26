'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useMemo } from "react";

export default function Providers({ children }: React.PropsWithChildren) {
    const client = useMemo(() => new QueryClient(), []);
    
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}
