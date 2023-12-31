import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroHeader1.module.css";

export function HeroHeader1({
  as: _Component = _Builtin.Block,
  heading1Text = "Luxury Pet Services for Your Beloved Companions",
  button1Text = "Learn More",

  button1Link = {
    href: "#",
  },

  button2Text = "Sign Up",

  button2Link = {
    href: "#",
  },

  mainImageAltText = "__wf_reserved_inherit",
  mainImage = "https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg",
  paragraphSlot,
  mainImageSlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_home_1_hero-header")}
      tag="header"
    >
      <_Builtin.Grid
        className={_utils.cx(_styles, "home_1_hero-header_component")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "home_1_hero-header_content")}
          id={_utils.cx(
            _styles,
            "w-node-_7707f616-f265-2160-d7ec-dcb468018903-68018901"
          )}
          tag="div"
        >
          <_Builtin.Heading tag="h1">{heading1Text}</_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-small")}
            tag="div"
          />
          <_Builtin.Block tag="div">
            {paragraphSlot ?? (
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "text-size-medium")}
              >
                {
                  "PoshPaws offers unparalleled luxury pet services, providing your furry friends with the finest care, comfort, and pampering they deserve. Whether it's our luxurious pet hotel or our in-home dog walking and care services, we create unforgettable experiences for your beloved companions."
                }
              </_Builtin.Paragraph>
            )}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-medium")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={button1Link}
            >
              {button1Text}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "is-secondary")}
              button={true}
              options={button2Link}
            >
              {button2Text}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "home_1_hero-header_image-wrapper")}
          tag="div"
        >
          {mainImageSlot ?? (
            <_Builtin.Image
              className={_utils.cx(_styles, "home_1_hero-header_image")}
              loading="eager"
              width="auto"
              height="auto"
              src={mainImage}
            />
          )}
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
