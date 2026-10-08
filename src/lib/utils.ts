import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function quickExit(fallbackUrl = 'https://www.google.com') {
  // Replace current history entry and navigate away immediately
  window.location.replace(fallbackUrl);
}
