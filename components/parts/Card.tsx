import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  heading: string;
  description: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  heading,
  description,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={`/research/${link}`}
      className="relative rounded-lg shadow-lg overflow-hidden dark:bg-slate-700 transition-colors ease-out duration-500"
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
          {link
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
    </Link>
  );
};

export default Card;
