import * as React from "react";
import * as Types from "./types";

declare function HeroHeader1(props: {
  as?: React.ElementType;
  heading1Text?: React.ReactNode;
  button1Text?: React.ReactNode;
  button1Link?: Types.Basic.Link;
  button2Text?: React.ReactNode;
  button2Link?: Types.Basic.Link;
  mainImageAltText?: Types.Basic.AltText;
  mainImage?: Types.Asset.Image;
  paragraphSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
