import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

// types.ts
export interface Book {
  [x: string]: string | StaticImport;
  link: any;
  gumroad: any;
  id: string;
  title: string;

}

export interface Category {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  books: Book[];
}
