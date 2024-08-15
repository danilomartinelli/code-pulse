import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createEventListener<T extends Event>(
  handler: (event: T) => void
): EventListener {
  return (event: Event) => handler(event as T);
}

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') return '';
  throw new Error('getBaseUrl should not be called on the server.');
}
