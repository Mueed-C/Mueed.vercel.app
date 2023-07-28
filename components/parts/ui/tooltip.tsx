import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface hoverProps {
  title: string;
  img: string;
}

const Tooltip2: React.FC<hoverProps> = ({ title, img }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="h-0 py-0 pl-0 pr-1 ">
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 bg-white dark:bg-gray-700 bg-opacity-90"
        side="top"
      >
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Proof</h4>
            <div className="flex items-center pt-2">
              <Image
                src={img}
                alt={`The image of my certification for {title}`}
                width={2500}
                height={2500}
              />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Tooltip2;
