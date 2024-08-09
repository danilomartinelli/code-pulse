import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createEventListener<T extends Event>(
  handler: (event: T) => void,
): EventListener {
  return (event: Event) => handler(event as T);
}
