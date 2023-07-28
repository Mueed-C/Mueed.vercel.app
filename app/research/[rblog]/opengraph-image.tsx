import { getrBlog } from "@/sanity/sanity.utils";
import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";
type ImageProps = {
  params: { rblog: string }; // Use the same type as in your page.tsx
};
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Research in detail!";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// // Font
// const interSemiBold = fetch(
//   new URL("./Inter-SemiBold.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
            backgroundClip: "text",
            "-webkit-background-clip" as any: "text",
            color: "transparent",
            margin: 20,
          }}
        >
          My Research, in detail!
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        ></div>

        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40))",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
            margin: 20,
          }}
        >
          Mueed Chaudhary
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Inter",
      //     data: await interSemiBold,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
