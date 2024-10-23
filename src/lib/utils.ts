import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLetters(s:string):string{
  return s.split(" ")[0].charAt(0)+s.split(" ")[1].charAt(0)
}
