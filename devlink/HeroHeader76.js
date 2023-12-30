import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./HeroHeader76.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-40"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f16b547-4ba5-ad06-b856-3d65a2b4492e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f16b547-4ba5-ad06-b856-3d65a2b4492e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1653903027600},"e-41":{"id":"e-41","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-20","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-42"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6f16b547-4ba5-ad06-b856-3d65a2b4492e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6f16b547-4ba5-ad06-b856-3d65a2b4492e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1653903968011}},"actionLists":{"a-19":{"id":"a-19","title":"Header 76 image left [Loop]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":30000,"target":{"useEventTarget":"CHILDREN","selector":".header76_image-list-left","selectorGuids":["d807a839-002f-d5c3-0024-6d0421da4378"]},"yValue":-50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-19-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".header76_image-list-left","selectorGuids":["d807a839-002f-d5c3-0024-6d0421da4378"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653903030774},"a-20":{"id":"a-20","title":"Header 76 image right [Loop]","actionItemGroups":[{"actionItems":[{"id":"a-20-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":30000,"target":{"useEventTarget":"CHILDREN","selector":".header76_image-list-right","selectorGuids":["d807a839-002f-d5c3-0024-6d0421da437c"]},"yValue":-50,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]},{"actionItems":[{"id":"a-20-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".header76_image-list-right","selectorGuids":["d807a839-002f-d5c3-0024-6d0421da437c"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1653903030774}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function HeroHeader76({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_header76")}
      data-w-id="6f16b547-4ba5-ad06-b856-3d65a2b4492e"
      tag="header"
    >
      <_Builtin.Grid
        className={_utils.cx(_styles, "header76_component")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "header76_content-left")}
          id={_utils.cx(
            _styles,
            "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44930-a2b4492e"
          )}
          tag="div"
        >
          <_Builtin.Heading tag="h1">
            {"Medium length hero heading goes here"}
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
          <_Builtin.Block
            className={_utils.cx(_styles, "button-group")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Button"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "is-secondary")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Button"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "header76_content-right")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header76_images-layout")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "header76_image-list-left")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header76_image-list")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4493f-a2b4492e"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44940-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44941-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44942-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44944-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44945-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "header76_image-list")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44946-a2b4492e"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44947-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44948-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44949-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4494a-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4494b-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4494c-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "header76_image-list-right")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "header76_image-list")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4494e-a2b4492e"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4494f-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44950-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44951-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44952-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44953-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44954-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "header76_image-list")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44955-a2b4492e"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44956-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44957-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44958-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b44959-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "header76_image-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4495a-a2b4492e"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header76_image")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_6f16b547-4ba5-ad06-b856-3d65a2b4495b-a2b4492e"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bb7c07ea94b2c8fd8aac_placeholder-image.svg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Grid>
    </_Component>
  );
}
