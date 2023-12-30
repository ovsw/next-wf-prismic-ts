import { HeroHeader1 } from "@/devlink";
import { Content } from "@prismicio/client";
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
      <HeroHeader1
        heading1Text={slice.primary.heading}
        paragraphSlot={<PrismicRichText field={slice.primary.text} />}
      />
    </div>
  );
};

export default HeroHeading;
