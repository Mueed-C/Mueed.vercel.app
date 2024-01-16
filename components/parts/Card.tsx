import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  imageUrl: string;
  heading: string;
  description: string;
  link?: string;
  done: boolean;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  heading,
  description,
  link,
  done,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden dark:bg-slate-700 transition-colors ease-out duration-500 " ${
        done ? "cursor-pointer" : "cursor-default"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt="Topic Image"
        height={630}
        width={630}
        placeholder="blur"
        blurDataURL={imageUrl}
      />
      {/* <img className="w-full h-48 object-cover" src={imageUrl} alt="Card Image" /> */}
      <div
        className={`${
          isHovered ? "opacity-80" : "opacity-0"
        } transition-opacity duration-300 ease-in-out absolute inset-0 bg-black  flex justify-center items-center`}
      >
        <p className="text-white text-lg text-center">
          {done
            ? "Click to read more"
            : "Post still being written, please check back later when it's finished :)"}
        </p>
      </div>
      <div className="p-6 ">
        <h3 className="text-xl font-medium mb-2">{heading}</h3>
        <p className="text-gray-600 dark:text-slate-400 transition-colors ease-out duration-500">
          {description}
        </p>
      </div>
      {/* DISPLAY STATUS OF POST, WHETHER IT IS READY OR NOT */}
      <div className="flex justify-center pb-2">
        {done ? (
          <Badge className=" bg-green-400 dark:bg-green-800 border-gray-500">
            Post Ready!
          </Badge>
        ) : (
          <Badge variant="outline" className="border-gray-500">
            Upcoming... 
          </Badge>
        )}
      </div>
      {/* DISPLAY THE CLICKABLE LINK IF POST IS READY */}
      {done && link && (
        <Link
          href={`/research/${link}`}
          className="absolute inset-0 z-10"
          style={{ pointerEvents: isHovered ? "auto" : "none" }}
        ></Link>
      )}
    </div>
  );
};

export default Card;
