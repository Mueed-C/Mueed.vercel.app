import React, { useEffect, useState } from "react";
import Section from "@/components/parts/Section";
import Card from "@/components/parts/Card";
import { getRblogs } from "@/sanity/sanity.utils";
import LoadingCard from "@/components/parts/loaders/CardLoader";
import { motion } from "framer-motion";
import LoadingOverlay from "@/components/parts/loaders/LoadingOverlay";
// Import the rBlog type

import { PortableTextBlock } from "sanity";
type rBlog = {
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
};

const Research = () => {
  const [fetchedBlogs, setFetchedBlogs] = useState<rBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  useEffect(() => {
    (async () => {
      const blogs = await getRblogs();
      setFetchedBlogs(blogs);
      setIsLoading(false); // Once data is fetched, set isLoading to false
    })();
  }, []);
  // const handlePostClick = () => {
  //   setIsLoading2(true);
  //   // Simulate loading delay (you can replace this with actual API call or data fetching)
  //   setTimeout(() => {
  //     setIsLoading2(false);
  //   }, 1);
  // };
  return (
    <motion.div
      id="blog_research"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      exit={{
        opacity: 0,
        y: 10,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
    >
      <Section title="My Research!" mbot="4" isF>
        <p className=" mt-7">
          This is where I personally talk about each research I&apos;ve worked
          on, how I felt about it, and what I learned from it!
        </p>
        <div id="tag_filters">
          {/* TODO: Display all tags as options here:
               I think, use a badge icon?*/}
          {/* <div>Oncology</div>
          <div>Ob/GYN</div> */}
        </div>
      </Section>

      <Section>
        <section className="grid gap-4 sm:grid-cols-2">
          {isLoading ? (
            // Placeholder with pulsing animation while data is being fetched

            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
          ) : (
            // Actual content is displayed once data is loaded
            fetchedBlogs.map((blog) => (
              <Card
                key={blog._id}
                heading={blog.title}
                description={blog.desc}
                link={blog.slug}
                imageUrl={blog.coverImage}
                // onClick={handlePostClick}
              />
            ))
          )}
          {isLoading2 && <LoadingOverlay />}
          {/* <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 1"
    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium placeat sunt hic voluptatem reprehenderit? Labore commodi officia sit veritatis minus deleniti non consequatur earum magni, distinctio illo tempora nobis!Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    link="/"
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 2"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
  {/* Add more Card components as needed */}{" "}
          {/*
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 3"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 4"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 5"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 6"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  />
  <Card
    imageUrl="https://t3.ftcdn.net/jpg/05/65/73/56/360_F_565735615_D2uX6alZuUOu77bJkfh5JKJbKmyZmxNu.jpg"
    heading="Card 7"
    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  /> */}
        </section>
      </Section>
    </motion.div>
  );
};

export default Research;
