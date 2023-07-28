import { TimelineItem } from "@/components/parts/timeline parts/TimelineItem";
import type { MilestoneItem } from "@/sanity/types/Timeline_Types";

interface TimelineItem {
  title: string;
  milestones: MilestoneItem[];
}

export function TimelineSection({ timelines }: { timelines: TimelineItem[] }) {
  return (
    <div className="flex flex-col gap-4 pt-16 text-black dark:text-slate-200  md:flex-row justify-between">
      {timelines?.map((timeline, key) => {
        const { title, milestones } = timeline;
        return (
          <div className="max-w-[80%] md:max-w-[50%]" key={key}>
            <div className="pb-5 font-sans text-xl font-bold">{title}</div>

            {milestones?.map((experience, index) => (
              <div
                key={index}
                className="translate-x-6 md:translate-x-3 justify-between"
              >
                <TimelineItem
                  milestone={experience}
                  isLast={milestones.length - 1 === index}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
