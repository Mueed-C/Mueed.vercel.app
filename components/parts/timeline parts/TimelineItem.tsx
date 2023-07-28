import ImageBox from "@/components/parts/timeline parts/ImageBox";
import type { MilestoneItem } from "@/sanity/types/Timeline_Types";

export function TimelineItem({
  isLast,
  milestone,
}: {
  isLast: boolean;
  milestone: MilestoneItem;
}) {
  const { description, image, tags, title } = milestone;

  return (
    <div className={`flex min-h-[200px] font-sans ${!isLast && "pb-2"}`}>
      <div className="flex flex-col">
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden rounded-md bg-black dark:bg-slate-600"
          style={{ width: "65px", height: "65px" }}
        >
          <ImageBox
            image={image}
            alt={title || "Timeline item icon"}
            size="10vw"
            width={500}
            height={500}
          />
        </div>
        {/* Vertical line */}
        {!isLast && (
          <div className="mt-2 w-px grow self-center  bg-slate-300" />
        )}
      </div>
      <div className="flex-initial pl-4">
        {/* Title */}
        <div className="font-bold text-black dark:text-slate-300">{title}</div>
        {/* Tags */}
        <div className="text-sm text-gray-600 dark:text-slate-400">
          {tags?.map((tag, key) => (
            <span key={key}>
              {tag}
              {/* <span className="mx-1">●</span> */}
            </span>
          ))}
        </div>
        {/* Description */}
        <div className="pb-5 pt-3 font-serif text-gray-600 dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
}
