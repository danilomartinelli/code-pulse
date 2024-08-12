import { TRPCError } from "@trpc/server";
import { TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc";
import { DEFAULT_UNEXPECTED_ERROR_MESSAGE } from "../misc/constants";

interface ErrorOptions {
  code?: TRPC_ERROR_CODE_KEY;
  defaultMessage?: string;
}

export function handleTRPCError(
  err: unknown,
  {
    code = "INTERNAL_SERVER_ERROR",
    defaultMessage = DEFAULT_UNEXPECTED_ERROR_MESSAGE,
  }: ErrorOptions = {},
): never {
  const message = (err as Error).message || defaultMessage;

  throw new TRPCError({
    code,
    message,
    cause: err,
  });
}
