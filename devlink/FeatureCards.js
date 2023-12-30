import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FeatureCards.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-19":{"id":"e-19","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-7","affectedElements":{},"duration":0}},"mediaQueries":["main","medium"],"target":{"id":"0d9c64c6-78bb-a5a5-f656-b667ddb2ff25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0d9c64c6-78bb-a5a5-f656-b667ddb2ff25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-7-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1690982554510},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-8","affectedElements":{},"duration":0}},"mediaQueries":["small","tiny"],"target":{"id":"0d9c64c6-78bb-a5a5-f656-b667ddb2ff25","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0d9c64c6-78bb-a5a5-f656-b667ddb2ff25","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-8-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1691045399419}},"actionLists":{"a-7":{"id":"a-7","title":"Layout 415 Card [Scroll] [Desktop]","continuousParameterGroups":[{"id":"a-7-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"xValue":0,"yValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":22,"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"zValue":3,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"xValue":-10,"yValue":-100,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"xValue":0,"yValue":0,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"px"}}]},{"keyframe":44,"actionItems":[{"id":"a-7-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"xValue":-10,"yValue":-100,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"vh"}},{"id":"a-7-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"zValue":6,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"xValue":0,"yValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":66,"actionItems":[{"id":"a-7-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"xValue":-10,"yValue":-100,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}},{"id":"a-7-n-12","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]}],"createdOn":1690982559519},"a-8":{"id":"a-8","title":"Layout 415 Card [Scroll] [Mobile]","continuousParameterGroups":[{"id":"a-8-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":20,"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"yValue":0,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":35,"actionItems":[{"id":"a-8-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"zValue":-10,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"zValue":3,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-1","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e86"]},"yValue":-120,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-8-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"yValue":0,"zValue":null,"xUnit":"PX","yUnit":"vh","zUnit":"px"}}]},{"keyframe":50,"actionItems":[{"id":"a-8-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"zValue":-10,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"yValue":0,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-8-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"zValue":6,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-2","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e83"]},"yValue":-120,"zValue":null,"xUnit":"PX","yUnit":"vh","zUnit":"vh"}}]},{"keyframe":65,"actionItems":[{"id":"a-8-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"yValue":-120,"xUnit":"PX","yUnit":"vh","zUnit":"PX"}},{"id":"a-8-n-12","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".layout415_card.card-3","selectorGuids":["59f5d639-d72f-85f1-da32-da89ed072e7b","59f5d639-d72f-85f1-da32-da89ed072e84"]},"zValue":-10,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]}],"createdOn":1690982559519}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FeatureCards({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_layout415")}
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
            className={_utils.cx(_styles, "layout415_component")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "layout415_content")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "layout415_content-left")}
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
                className={_utils.cx(_styles, "layout415_content-right")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "layout415_card", "card-1")}
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
                    className={_utils.cx(_styles, "spacer-medium")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "layout415_card-content")}
                    tag="div"
                  >
                    <_Builtin.Heading tag="h5">
                      {"Subheading one"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "layout415_card", "card-2")}
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
                    className={_utils.cx(_styles, "spacer-medium")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "layout415_card-content")}
                    tag="div"
                  >
                    <_Builtin.Heading tag="h5">
                      {"Subheading two"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "layout415_card", "card-3")}
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
                    className={_utils.cx(_styles, "spacer-medium")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "layout415_card-content")}
                    tag="div"
                  >
                    <_Builtin.Heading tag="h5">
                      {"Subheading three"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "layout415_card", "card-4")}
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
                    className={_utils.cx(_styles, "spacer-medium")}
                    tag="div"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "layout415_card-content")}
                    tag="div"
                  >
                    <_Builtin.Heading tag="h5">
                      {"Subheading four"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "spacer-xsmall")}
                      tag="div"
                    />
                    <_Builtin.Paragraph>
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                      }
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "layout415_ix-trigger")}
              data-w-id="0d9c64c6-78bb-a5a5-f656-b667ddb2ff25"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
