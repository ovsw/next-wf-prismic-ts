import * as React from "react";
import * as Types from "./types";

declare function Feature1(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  eyebrowText?: React.ReactNode;
  paragraphText?: React.ReactNode;
  button1Text?: React.ReactNode;
  button1Link?: Types.Basic.Link;
  hideSection?: Types.Builtin.Text;
}): React.JSX.Element;
