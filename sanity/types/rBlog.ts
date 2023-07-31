import { PortableTextBlock } from "sanity";

export type rBlog = {
  _id: string;
  _createdAt: Date;
  title: string;
  // author: {
  //     name: string;
  //     image: string;
  // }
  slug: string;
  mainImage: string;
  url: string;
  categories: {
    title: string;
  }[];
  content: PortableTextBlock[];
  desc: string;
  coverImage: string;
  finished: boolean;
};
