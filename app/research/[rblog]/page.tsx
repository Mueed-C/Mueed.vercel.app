import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import DefButton from "@/components/parts/DefButton";
import Section from "@/components/parts/Section";
import { getrBlog } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar_blog from "@/components/Navbar_blog";
import { Metadata } from "next";

import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

type Props = {
  params: { rblog: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.rblog;
  const rblog = await getrBlog(slug);
  // Generate the full URL for Open Graph & Twitter
  const ogUrl = `https://mueed.vercel.app/research/${rblog.slug}`;
  if (!rblog)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: "Mueed | " + rblog.title,
    description: rblog.desc,
    // Meta Tags for Open Graph
    // og: {
    //   title: rblog.title,
    //   description: rblog.desc,
    //   image: rblog.coverImage,
    //   url: ogUrl,
    // },
    // The Open Graph metadata for the document.
    // manifest: {
    //   type: "image/jpg",
    //   url: "https://mueed.vercel.app/research/" + rblog.slug,
    //   title: rblog.title,
    //   description: rblog.desc,
    //   // siteName: "My Website",
    //   image: rblog.coverImage,
    //   images: [
    //     {
    //       url: rblog.coverImage,
    //     },
    //   ],
    // },
    // //  The Twitter metadata for the document.
    // openGraph: {
    //   card: "summary",
    //   images: rblog.coverImage,
    // },
  };
}

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder().image(value).width(800).fit("max").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export default async function rBlog({ params }: Props) {
  const slug = params.rblog;
  const rblog = await getrBlog(slug);

  // Now for main content
  return (
    <>
      <div className="mx-5 gap-4 md:flex md:mt-10 justify-center ">
        <Sidebar />

        <div className=" flex flex-col flex-initial md:basis-3/4 lg:basis-4/6 xl:basis-2/4 gap-4 ">
          {/* navbar goes here */}
          <Navbar_blog />
          {/* Render the MainContent component */}
          <div className=" rounded-md relative px-4">
            <div className=" pb-11 min-h-min rounded-md p-4 bg-slate-100 dark:bg-slate-700 drop-shadow-md transition-colors ease-out duration-300">
              <main>
                <div>
                  <Section title={rblog.title}>
                    <div className="mt-5">
                      <PortableText
                        value={rblog.content}
                        components={{
                          types: {
                            image: SampleImageComponent,
                          },
                        }}
                      />
                    </div>
                  </Section>
                  <Section title="Let's Connect and Collaborate!" mbot="5">
                    {" "}
                    <p className="text-center">
                      Thank you for taking the time to explore this research
                      project with me! If you have any questions, insights, or
                      would like to collaborate on a research project, I&#39;d
                      be thrilled to hear from you.
                      <br />
                      <br />
                      Feel free to reach out to me via email using the button
                      below. Whether you&#39;re a fellow medical student,
                      researcher, or healthcare professional, I am always open
                      to exchanging ideas and exploring new opportunities for
                      collaboration.
                      <br />
                      <br />
                      Looking forward to hearing from you and exploring the
                      possibilities of making a meaningful impact in the field
                      of medicine.
                    </p>
                    <br />
                    <Link href="mailto:Mueed.WMC@gmail.com">
                      <DefButton name="Email me!" />
                    </Link>
                    <br />
                    <p></p>
                  </Section>
                </div>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
