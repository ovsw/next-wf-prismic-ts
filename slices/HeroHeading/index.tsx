import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroHeading`.
 */
export type HeroHeadingProps = SliceComponentProps<Content.HeroHeadingSlice>;

/**
 * Component for "HeroHeading" Slices.
 */
const HeroHeading = ({ slice }: HeroHeadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_heading (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroHeading;
