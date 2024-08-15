'use client';

import { type ReactNode, createContext, useRef } from 'react';

import { createConnectionStore } from '@/stores/connection-store';

export type ConnectionStoreApi = ReturnType<typeof createConnectionStore>;

export const ConnectionStoreContext = createContext<
  ConnectionStoreApi | undefined
>(undefined);

export interface ConnectionStoreProviderProps {
  children: ReactNode;
}

export const ConnectionStoreProvider = ({
  children,
}: ConnectionStoreProviderProps) => {
  const storeRef = useRef<ConnectionStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createConnectionStore();
  }

  return (
    <ConnectionStoreContext.Provider value={storeRef.current}>
      {children}
    </ConnectionStoreContext.Provider>
  );
};
