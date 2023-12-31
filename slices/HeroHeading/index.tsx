import { HeroHeader1 } from "@/devlink";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroHeading`.
 */
export type HeroHeadingProps = SliceComponentProps<Content.HeroHeadingSlice>;

/**
 * Component for "HeroHeading" Slices.
 */
const HeroHeading = ({ slice }: HeroHeadingProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <PrismicNextImage field={slice.primary.mainImage} /> */}
      <HeroHeader1
        heading1Text={slice.primary.heading}
        paragraphSlot={<PrismicRichText field={slice.primary.text} />}
        // mainImage={`${slice.primary.mainImage.url}`}
        mainImageAltText={slice.primary.mainImage.alt}
        mainImageSlot={
          <PrismicNextImage
            field={slice.primary.mainImage}
            // imgixParams={{ sat: -100, w: 200 }}
            style={{
              objectFit: "cover",
              maxHeight: "60rem",
              width: "auto",
              height: "auto",
            }}
          />
        }
      />
    </div>
  );
};

export default HeroHeading;
