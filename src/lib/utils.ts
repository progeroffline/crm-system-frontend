import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mergeClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCell = (value: number | string) => {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  if (typeof value === 'number') {
    return currencyFormatter.format(value);
  }
  if (value === null) {
    return currencyFormatter.format(0);
  }
  return String(value ?? '');
};
