import { createClient } from "@sanity/client";
import groq from "groq";
import clientConfig from "./config/client-config";
import { Main } from "./types/Main";
import { rBlog } from "./types/rBlog";

// ================= Main page call
export async function getMain(): Promise<Main[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "settings"]{
    bio[]{   
      _type == "block" => {
        "text": children[].text
      }
    }
  }
  `);
}
// ===============Gonna break up each part of the resume tab
// into separate calls. idk if thats a good way to approach
// this or not.....
export async function getResumeHxData(): Promise<any> {
  return createClient(clientConfig).fetch(groq`
    *[_type == "settings"][0].resumeHx
  `);
  // Fetching the education and clinical hx
}

export async function getResearchHxData(): Promise<any> {
  return createClient(clientConfig).fetch(groq`
  *[ _type == "settings"][0].researchHx

  `);
  // Fetching the ongoing research hx
}
export async function getVtexp(): Promise<[]> {
  return createClient(clientConfig).fetch(groq`
  *[ _type == "settings"][0].vtexp
  `);
  // Fetch all the volunteer experience
}

export async function getLeca(): Promise<[]> {
  return createClient(clientConfig).fetch(groq`
  *[ _type == "settings"][0].leca

  `);
  // Fetch all the leadership & EC experience
}

export async function getInterests(): Promise<[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "settings"][0].interests[].slitsName
  `);
  // Fetch all the Interests
}

export async function getSkills(): Promise<[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "settings"][0].skills[].slitsName
  `);
  // Fetch all the Skills
}

export async function getCerts(): Promise<[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "settings"][0].Certifications[]{
    "certName": certName,
    "image": image.asset->url,
    "_key": _key
    }
  `);
  // Fetch all the certifications and their images
}
// =================Research blog calls
export async function getRblogs(): Promise<rBlog[]> {
  return createClient(clientConfig).fetch(groq`
  *[_type == "rpost"] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    url,
    desc,
    publishedAt,
    content,
    finished
  }`);
}

export async function getrBlog(slug: string): Promise<rBlog> {
  return createClient(clientConfig).fetch(
    groq`
  *[_type == "rpost" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    "coverImage": coverImage.asset->url,
    url,
    desc,
    publishedAt,
    content,
    finished
  }`,
    { slug }
  );
}
// export async function getBlogs(): Promise<Blog[]> {
//   return createClient(clientConfig).fetch(groq`
//     *[_type == "post"]{
//       _id,
//       _createdAt,
//       title,
//       author->{name, "image": image.asset->url,},
//       "categories": categories[]->{title},
//       "slug": slug.current,
//       "mainImage": mainImage.asset->url,
//     }
//   `);
// }

// export async function getBlog(slug: string): Promise<Blog> {
//     return createClient(clientConfig).fetch(groq`
//       *[_type == "post" && slug.current == $slug][0]{
//         _id,
//         _createdAt,
//         title,
//         author->{name, "image": image.asset->url,},
//         "categories": categories[]->{title},
//         "slug": slug.current,
//         "mainImage": mainImage.asset->url,
//       }
//     `, { slug: slug });
// }
