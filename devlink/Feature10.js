import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Feature10.module.css";

export function Feature10({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_layout10")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-global")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-large")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-section-large")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "layout10_component")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "layout10_content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-weight-semibold")}
                  tag="div"
                >
                  {"Tagline"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-xsmall")}
                  tag="div"
                />
                <_Builtin.Heading tag="h2">
                  {"Medium length section heading goes here"}
                </_Builtin.Heading>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-small")}
                  tag="div"
                />
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "text-size-medium")}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-medium")}
                  tag="div"
                />
                <_Builtin.Grid
                  className={_utils.cx(_styles, "layout10_item-list")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "layout10_item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-1x1-medium")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8ac3_icon.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Heading tag="h6">
                      {"Subheading one"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "layout10_item")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "icon-1x1-medium")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt=""
                      src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8ac3_icon.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Heading tag="h6">
                      {"Subheading two"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Grid>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-medium")}
                  tag="div"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "button-group")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button", "is-secondary")}
                    button={true}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Button"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-link",
                      "is-icon"
                    )}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Button"}</_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xxsmall")}
                      value="%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%203L11%208L6%2013%22%20stroke%3D%22CurrentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "layout10_image-wrapper")}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "layout10_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
