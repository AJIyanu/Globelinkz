import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitStringRegx(inputString: string): string[] {
  const chars: string[] = [];
  const regx = /[\s\S]/gu;

  let match;

  while ((match = regx.exec(inputString)) !== null) {
    chars.push(match[0]);
  }

  return chars;
}
