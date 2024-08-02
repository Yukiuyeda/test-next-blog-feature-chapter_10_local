import { Category } from "./category";

export type NewPost = {
  title: string;
  content: string;
  thumbnailUrl: string;
  selectedcategories: Category[];
};
