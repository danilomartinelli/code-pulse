import { ConnectionStoreContext } from "@/providers/connection-store-provider";
import { ConnectionStore } from "@/stores/connection-store";
import { useContext } from "react";
import { useStore } from "zustand";

export const useConnectionStore = <T>(
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
