import { Category } from "./category";

export type NewPost = {
  title: string;
  content: string;
  thumbnailImageKey: null | string;
  categories?: Category[];
};
