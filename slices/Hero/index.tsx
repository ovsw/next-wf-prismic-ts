import { Hero1, Hero5 } from "@/devlink";
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

      {slice.variation === "default" && (
        <Hero1
          heading1Text={slice.primary.heading}
          textSlot1={<PrismicRichText field={slice.primary.text} />}
          // mainImage={`${slice.primary.mainImage.url}`}
          //@ts-ignore
          // mainImage={slice.primary.mainImage}
          mainImageAltText={slice.primary.mainImage.alt}
          mainImageSlot={
            <PrismicNextImage
              field={slice.primary.mainImage}
              // imgixParams={{ sat: -100 }}
              sizes="(max-width: 991px) 110px, 50vw"
              width={2}
              style={{
                objectFit: "cover",
                maxHeight: "35rem",
                width: "100%",
                height: "auto",
              }}
            />
          }
        />
      )}
      {slice.variation === "hero5" && (
        <Hero5
          headingText={slice.primary.heading}
          paragraphSlot={<PrismicRichText field={slice.primary.text} />}
          // mainImage={`${slice.primary.mainImage.url}`}
          //@ts-ignore
          // mainImage={slice.primary.mainImage}
          mainImageAltText={slice.primary.mainImage.alt}
          mainImageSlot={
            <PrismicNextImage
              field={slice.primary.mainImage}
              // imgixParams={{ sat: -100 }}
              sizes="(max-width: 991px) 110px, 50vw"
              width={2}
              style={{
                objectFit: "cover",
                // maxHeight: "35rem",
                width: "100%",
                height: "100%",
              }}
            />
          }
        />
      )}
    </div>
  );
};

export default HeroHeading;
