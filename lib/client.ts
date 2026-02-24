const SANITY_PROJECT_ID = "3c4n15ly";
const SANITY_DATASET = "production";

type TImageSource =
  | {
      asset?: {
        _ref?: string;
        url?: string;
      };
    }
  | string
  | null
  | undefined;

const buildImageUrlFromRef = (ref: string) => {
  const parts = ref.split("-");
  if (parts.length < 4 || parts[0] !== "image") {
    return "";
  }
  const assetId = parts[1];
  const dimensions = parts[2];
  const format = parts[3];
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${assetId}-${dimensions}.${format}`;
};

export const urlFor = (source: TImageSource) => ({
  url: () => {
    if (!source) return "";
    if (typeof source === "string") {
      return source;
    }
    if (source.asset?.url) {
      return source.asset.url;
    }
    if (source.asset?._ref) {
      return buildImageUrlFromRef(source.asset._ref);
    }
    return "";
  },
});
