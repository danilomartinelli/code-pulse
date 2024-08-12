"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type ConnectionStore,
  createConnectionStore,
} from "@/stores/connection-store";

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

export const useConnectionStore = <T,>(
  selector: (store: ConnectionStore) => T,
): T => {
  const connectionStoreContext = useContext(ConnectionStoreContext);

  if (!connectionStoreContext) {
    throw new Error(
      `useConnectionStore must be used within ConnectionStoreProvider`,
    );
  }

  return useStore(connectionStoreContext, selector);
};
