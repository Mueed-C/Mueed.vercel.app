import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import ImageBox from "@/components/parts/timeline parts/ImageBox";
// import { TimelineSection } from 'components/shared/TimelineSection'
import { Image } from "sanity";

export function CustomPortableText({
  paragraphClasses,
  value,
}: {
  paragraphClasses?: string;
  //   ORIGINALLY 'VALUE' WAS SET TO A TYPE OF "PortableTextBlock[]" BUT I CANT FIGURE OUT WHY IT WONT WORK SO IM GONNA USE TYPE "any" AS A WORKAROUND. I KNOW THIS BYPASSES THE TYPE CHECKING THAT TYPESCRIPT PROVIDES, BUT TBH I DONT HAVE TIME TO FIGURE THIS OUT AND IT WORKS FOR NOW. I ACKNOWLEDGE THAT THIS COULD LEAD TO POTENTIAL ISSUES IN THE FUTURE AS TYPE SAFETY IS COMPROMISED... BUT AGAIN, I DONT HAVE TIME FOR THAT AND IM NOT A PROFESSIONAL WEB DEVELOPER, I JUST WANT TO LEARN RESEARCH AND FOCUS ON MY STEPS PREP.
  value: any;
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string };
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9]"
            />
            {value?.caption && (
              <div className="font-serif text-sm italic">{value.caption}</div>
            )}
          </div>
        );
      },
      //   timeline: ({ value }) => {
      //     const { items } = value || {}
      //     return <TimelineSection timelines={items} />
      //   },
    },
  };

  return <PortableText components={components} value={value} />;
}
