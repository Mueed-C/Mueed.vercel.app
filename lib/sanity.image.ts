import createImageUrlBuilder from "@sanity/image-url";
import config from "@/sanity/config/client-config";
import type { Image } from "sanity";

const projectId = config.projectId;
const dataset = config.dataset;

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined;
  }

  return imageBuilder?.image(source).auto("format").fit("max");
};
