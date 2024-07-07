// types.ts
export interface Book {
  title: string;
  link: string;
  gumroad: string;
  image: string;
}

export interface Category {
  title: string;
  books: Book[];
}