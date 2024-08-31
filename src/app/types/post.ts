import { Category } from "./category";

export type Post = {
    id: number;
    title: string;
    thumbnailImageKey: string;
    createdAt: string;
    postCategories: {category: Category}[];
    content: string;
  };
  