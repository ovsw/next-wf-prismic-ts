import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2006"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfa96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfa96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643669590905},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1993"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfa96","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfa96","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1643669590905},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653387721728},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653387721736},"e-5":{"id":"e-5","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653387884853},"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-5"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfa9b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653387884865},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308029},"e-8":{"id":"e-8","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308029},"e-9":{"id":"e-9","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308029},"e-10":{"id":"e-10","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb17","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308029},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308585},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308585},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308585},"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfae1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001308585},"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001385278},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001385278},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001385278},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1905ad96-009f-845c-9544-d4c369fcfb64","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1703001385278},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-590"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a79","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a79","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626227992075},"e-23":{"id":"e-23","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["main"],"target":{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380561820},"e-24":{"id":"e-24","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-12","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["main"],"target":{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380561834},"e-25":{"id":"e-25","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-13","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380616175},"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6581bb7c07ea94b2c8fd8aa3|7f67e095-6405-37e6-30eb-9b55cc470a84","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1653380616183}},"actionLists":{"a":{"id":"a","title":"Navbar 12 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc512"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-2":{"id":"a-2","title":"Navbar 12 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc512"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-3":{"id":"a-3","title":"Navbar 12 dropdown [Open] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"value":1,"unit":""}},{"id":"a-3-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-4":{"id":"a-4","title":"Navbar 12 dropdown [Close] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"value":0,"unit":""}},{"id":"a-4-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-4-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-5":{"id":"a-5","title":"Navbar 12 dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-5-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-5-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-6":{"id":"a-6","title":"Navbar 12 dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar12_dropdown-list","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc508"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-9":{"id":"a-9","title":"Navbar 1 menu [Close]","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc512"]},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-9-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"yValue":-8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-9-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"yValue":8,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-9-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-9-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168378054},"a-10":{"id":"a-10","title":"Navbar 1 menu [Open]","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":600,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-10-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-bottom","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc514"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-10-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-top","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc511"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":400,"easing":"inOutQuint","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon1_line-middle","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc512"]},"widthValue":24,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626168766736},"a-11":{"id":"a-11","title":"Navbar 1 dropdown [Open] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-11-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-11-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"value":1,"unit":""}},{"id":"a-11-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-12":{"id":"a-12","title":"Navbar 1 dropdown [Close] [Desktop]","actionItemGroups":[{"actionItems":[{"id":"a-12-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"value":0,"unit":""}},{"id":"a-12-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-12-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095},"a-13":{"id":"a-13","title":"Navbar 1 dropdown [Open] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-13-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-13-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-13-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-14":{"id":"a-14","title":"Navbar 1 dropdown [Close] [Tablet]","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".navbar1_dropdown-list","selectorGuids":["54e9b508-dcba-10a0-5d46-77f9afb521c1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-14-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["c1cb3705-e722-8f5a-5370-31e753dcc507"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar12_component")}
      data-w-id="1905ad96-009f-845c-9544-d4c369fcfa96"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        collapse: "medium",
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "navbar12_container")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "navbar12_logo-link")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "navbar12_logo")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/6581bd873e87320efa633108_delgrosso-amusement-park-and-laguna-splash-wordmark.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(
            _styles,
            "navbar12_menu",
            "is-page-height-tablet"
          )}
          tag="nav"
          role="navigation"
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar12_menu-dropdown")}
            data-w-id="1905ad96-009f-845c-9544-d4c369fcfa9b"
            tag="div"
            delay="200"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar12_dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"For Groups"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "dropdown-chevron")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "navbar12_dropdown-list",
                "is--first"
              )}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar12_dropdown-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Group Picnics"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"The perfect Picnic Day"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Birthday Parties"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"At the Birthday Roundhouse!"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"GroupPricing"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"All-Day Fun Pass"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Four"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"School Groups"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Special Pricing"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Specialty Groups"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Boy & Girls Scouts, YMCA, 4H"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer-xsmall")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "divider-horizontal")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer-xsmall")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar12_dropdown-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Cabana Rentals"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"At Laguna Splash Water Park"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar12_menu-dropdown")}
            data-w-id="1905ad96-009f-845c-9544-d4c369fcfae1"
            tag="div"
            delay="200"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar12_dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Famous Food"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "dropdown-chevron")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "navbar12_dropdown-list",
                "is--nopadding"
              )}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "navbar12_dropdown-content",
                  "has--side-padding"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20data-prefix%3D%22fad%22%20data-icon%3D%22list-alt%22%20role%3D%22img%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cg%20class%3D%22fa-group%22%3E%3Cpath%20class%3D%22fa-secondary%22%20fill%3D%22currentColor%22%20d%3D%22M464%2032H48A48%2048%200%200%200%200%2080v352a48%2048%200%200%200%2048%2048h416a48%2048%200%200%200%2048-48V80a48%2048%200%200%200-48-48zM128%20392a40%2040%200%201%201%2040-40%2040%2040%200%200%201-40%2040zm0-96a40%2040%200%201%201%2040-40%2040%2040%200%200%201-40%2040zm0-96a40%2040%200%201%201%2040-40%2040%2040%200%200%201-40%2040zm288%20168a12%2012%200%200%201-12%2012H204a12%2012%200%200%201-12-12v-32a12%2012%200%200%201%2012-12h200a12%2012%200%200%201%2012%2012zm0-96a12%2012%200%200%201-12%2012H204a12%2012%200%200%201-12-12v-32a12%2012%200%200%201%2012-12h200a12%2012%200%200%201%2012%2012zm0-96a12%2012%200%200%201-12%2012H204a12%2012%200%200%201-12-12v-32a12%2012%200%200%201%2012-12h200a12%2012%200%200%201%2012%2012z%22%20opacity%3D%220.4%22%3E%3C%2Fpath%3E%3Cpath%20class%3D%22fa-primary%22%20fill%3D%22currentColor%22%20d%3D%22M128%20200a40%2040%200%201%200-40-40%2040%2040%200%200%200%2040%2040zm0%2016a40%2040%200%201%200%2040%2040%2040%2040%200%200%200-40-40zm0%2096a40%2040%200%201%200%2040%2040%2040%2040%200%200%200-40-40z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Food Menus"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"and allergen info"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20data-prefix%3D%22fad%22%20data-icon%3D%22book-heart%22%20class%3D%22svg-inline--fa%20fa-book-heart%20fa-w-14%22%20role%3D%22img%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3Cg%20class%3D%22fa-group%22%3E%3Cpath%20class%3D%22fa-secondary%22%20fill%3D%22currentColor%22%20d%3D%22M96%20448c-19.2%200-32-12.8-32-32s16-32%2032-32h319.33c-1.93%2016.24-1.76%2048.38.53%2064z%22%20opacity%3D%220.4%22%3E%3C%2Fpath%3E%3Cpath%20class%3D%22fa-primary%22%20fill%3D%22currentColor%22%20d%3D%22M96%20384h328a24%2024%200%200%200%2024-24V32a32%2032%200%200%200-32-32H96A96%2096%200%200%200%200%2096v320a96%2096%200%200%200%2096%2096h328a24%2024%200%200%200%2024-24v-16a24%2024%200%200%200-24-24H96c-19.2%200-32-12.8-32-32s16-32%2032-32zm53.8-274.9c24-20%2059.7-16.4%2081.6%205.8l8.6%208.7%208.6-8.7c22-22.2%2057.7-25.8%2081.6-5.8a60.65%2060.65%200%200%201%204.3%2089.1l-84.7%2085.6a13.94%2013.94%200%200%201-19.8%200l-84.7-85.6a60.74%2060.74%200%200%201%204.5-89.1z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"DelGrossoFood Tradition"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Since 1914"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20aria-hidden%3D%22true%22%3E%0A%20%20%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M61%2050h-5.21A13.06%2013.06%200%200%200%2043%2039h-.23A15.68%2015.68%200%200%200%2032%2035a16%2016%200%200%200-10.6%204H21A13.06%2013.06%200%200%200%208.17%2050H3a1%201%200%200%200-1%201%2011%2011%200%200%200%2011%2011h38a11%2011%200%200%200%2011-11%201%201%200%200%200-1-1zm-7.23%200h-2a9%209%200%200%200-5.86-6.51%2013.17%2013.17%200%200%200-1.29-2.36A11.08%2011.08%200%200%201%2053.77%2050zm-28.19%200a5%205%200%200%200-9.16%200H14.3a7%207%200%200%201%2013.4%200zm-2.35%200h-4.46a3%203%200%200%201%204.46%200zM32%2041a10%2010%200%200%201%207%202.92A8.9%208.9%200%200%200%2037.3%2045a8%208%200%200%200-5.3-2%207.89%207.89%200%200%200-5.32%202A8.47%208.47%200%200%200%2025%2043.92%2010%2010%200%200%201%2032%2041zm3.86%209a4%204%200%200%200-6.71-1.8%209.3%209.3%200%200%200-1.06-1.74A5.92%205.92%200%200%201%2032%2045a6%206%200%200%201%205.91%205zm-2.14%200h-3.44a2%202%200%200%201%203.44%200zm13.82%200a5%205%200%200%200-8-1.63%207.83%207.83%200%200%200-.93-1.85%207%207%200%200%201%2011%203.48zm-2.35%200h-4.46a3%203%200%200%201%204.46%200zM32%2037c5%200%209.27%202.32%2011.41%206H43a9%209%200%200%200-1.87.2A12%2012%200%200%200%2032%2039a11.88%2011.88%200%200%200-5.4%201.3%2013.17%2013.17%200%200%200-2.41-.89A13.9%2013.9%200%200%201%2032%2037zm-11%204a10.88%2010.88%200%200%201%203.54.61%2013.1%2013.1%200%200%200-1.65%201.6A8.95%208.95%200%200%200%2012.23%2050h-2.05A11.08%2011.08%200%200%201%2021%2041zm30%2019H13a9%209%200%200%201-8.94-8h55.88A9%209%200%200%201%2051%2060zM8.82%2014H6v2h2.31c-.08.17-.16.34-.25.5a8.09%208.09%200%200%200%200%208%206.06%206.06%200%200%201%200%206%208%208%200%200%200%200%208%208.73%208.73%200%200%201%20.53%201.37c.07.23.15.46.24.71l1.88-.68c-.08-.23-.15-.44-.21-.64a11.79%2011.79%200%200%200-.7-1.76%206.06%206.06%200%200%201%200-6%208.09%208.09%200%200%200%200-8%206.06%206.06%200%200%201%200-6%208.09%208.09%200%200%200%200-8%206.06%206.06%200%200%201%200-6%201%201%200%200%200%200-1%201%201%200%200%200-.87-.5H6v2h1.4A8%208%200%200%200%207%206H6v2h1.15a8%208%200%200%200%20.66%202H6v2h2.67a6.11%206.11%200%200%201%20.15%202z%22%2F%3E%0A%20%20%3Cpath%20fill%3D%22currentColor%22%20d%3D%22M56.54%204.13%2027.4%205l-1.52-1.54A5%205%200%200%200%2022.34%202H13a1%201%200%200%200-1%20.86%208.11%208.11%200%200%200%20.19%207.64%206.06%206.06%200%200%201%200%206%208.09%208.09%200%200%200%200%208%206.06%206.06%200%200%201%200%206%208.09%208.09%200%200%200%200%208%205.6%205.6%200%200%201%20.36.74l1.86-.75a9%209%200%200%200-.48-1%206.06%206.06%200%200%201%200-6%208.09%208.09%200%200%200%200-8%206.06%206.06%200%200%201%200-6A8.34%208.34%200%200%200%2014.6%2016h1.84a4.59%204.59%200%200%201-.24.5%208.09%208.09%200%200%200%200%208%206.06%206.06%200%200%201%200%206%208.06%208.06%200%200%200-.27%207.5l1.8-.86a6.05%206.05%200%200%201%20.21-5.61%208.09%208.09%200%200%200%200-8%206.06%206.06%200%200%201%200-6%208.25%208.25%200%200%200%20.64-1.5h3.76a5%205%200%200%200%203.54-1.46L27.39%2013l29%201.71a5.3%205.3%200%200%200%204-9.1%205.32%205.32%200%200%200-3.85-1.48zM59%2011.84a3.25%203.25%200%200%201-2.46.89L27.06%2011a1.06%201.06%200%200%200-.77.29l-1.83%201.83a3%203%200%200%201-2.12.88H15a8.39%208.39%200%200%200-.14-2H20v-2h-5.82c-.08-.17-.15-.34-.24-.5a5.88%205.88%200%200%201-.6-1.5H20V6h-6.83a5.84%205.84%200%200%201%20.51-2h8.66a3%203%200%200%201%202.12.88l1.83%201.83A1%201%200%200%200%2027%207l29.6-.87a3.26%203.26%200%200%201%202.4.93%203.31%203.31%200%200%201%200%204.78z%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Spaghetti Wednesdays"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Weekly Pasta Features"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20data-prefix%3D%22fad%22%20data-icon%3D%22truck%22%20role%3D%22img%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20640%20512%22%3E%3Cg%20class%3D%22fa-group%22%3E%3Cpath%20class%3D%22fa-secondary%22%20fill%3D%22currentColor%22%20d%3D%22M176%20352a80%2080%200%201%200%2080%2080%2080%2080%200%200%200-80-80zm288%200a80%2080%200%201%200%2080%2080%2080%2080%200%200%200-80-80z%22%20opacity%3D%220.4%22%3E%3C%2Fpath%3E%3Cpath%20class%3D%22fa-primary%22%20fill%3D%22currentColor%22%20d%3D%22M624%20352h-16V243.9a48%2048%200%200%200-14.1-33.9L494%20110.1A48%2048%200%200%200%20460.1%2096H416V48a48%2048%200%200%200-48-48H48A48%2048%200%200%200%200%2048v320a48%2048%200%200%200%2048%2048h18.16C74%20361.93%20119.78%20320%20176%20320s102.54%2041.86%20110.38%2096h67.24c7.85-54.14%2054.1-96%20110.38-96s102%2041.93%20109.84%2096H624a16%2016%200%200%200%2016-16v-32a16%2016%200%200%200-16-16zm-64-96H416V144h44.1l99.9%2099.9z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Pick-Up &Delivery Catering"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"for your next event"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "spacer-xsmall")}
                tag="div"
              />
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "navbar12_dropdown-content",
                  "is--dg2go-banner"
                )}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Image
                    id={_utils.cx(
                      _styles,
                      "w-node-_1905ad96-009f-845c-9544-d4c369fcfb0d-69fcfa96"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://uploads-ssl.webflow.com/6581bb7b07ea94b2c8fd8a3f/65825dfdeea7f7ff702d19ce_DG2GO-logo-transparent-white.png"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Block tag="div">
                    {"Miss Our Food? Try DG2GO!"}
                  </_Builtin.Block>
                  <_Builtin.Block tag="div">
                    {
                      "Delicious, homemade Meals, Pizza & More! Ready for Pickup."
                    }
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-alternate",
                      "is-icon"
                    )}
                    tag="div"
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "icon-embed-xsmall")}
                      value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--fe%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22currentColor%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010s-4.477%2010-10%2010m0-2a8%208%200%201%200%200-16a8%208%200%200%200%200%2016m-5-5h2v2zm10%200l-2%202v-2zM9%207v2H7zm6%200l2%202h-2zm-2.5%202a1.5%201.5%200%201%200%200-3a1.5%201.5%200%200%200%200%203m-5%204a1.5%201.5%200%201%200%200-3a1.5%201.5%200%200%200%200%203m9%201a1.5%201.5%200%201%200%200-3a1.5%201.5%200%200%200%200%203M12%2013a1%201%200%201%200%200-2a1%201%200%200%200%200%202m-.5%205a1.5%201.5%200%201%200%200-3a1.5%201.5%200%200%200%200%203%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block tag="div">{"Click Here"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar12_menu-dropdown")}
            data-w-id="1905ad96-009f-845c-9544-d4c369fcfb17"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar12_dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Explore"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "dropdown-chevron")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar12_dropdown-list")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar12_dropdown-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-size-small",
                      "text-weight-semibold"
                    )}
                    tag="h4"
                  >
                    {"Page group one"}
                  </_Builtin.Heading>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page One"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Two"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Three"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Four"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-size-small",
                      "text-weight-semibold"
                    )}
                    tag="h4"
                  >
                    {"Page group two"}
                  </_Builtin.Heading>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Five"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Six"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Seven"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Eight"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "navbar12_menu-dropdown")}
            data-w-id="1905ad96-009f-845c-9544-d4c369fcfb64"
            tag="div"
            delay="200"
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "navbar12_dropdown-toggle")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"Info Booth"}</_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "dropdown-chevron")}
                value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewbox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.55806%206.29544C2.46043%206.19781%202.46043%206.03952%202.55806%205.94189L3.44195%205.058C3.53958%204.96037%203.69787%204.96037%203.7955%205.058L8.00001%209.26251L12.2045%205.058C12.3021%204.96037%2012.4604%204.96037%2012.5581%205.058L13.4419%205.94189C13.5396%206.03952%2013.5396%206.19781%2013.4419%206.29544L8.17678%2011.5606C8.07915%2011.6582%207.92086%2011.6582%207.82323%2011.5606L2.55806%206.29544Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "navbar12_dropdown-list")}
              tag="nav"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "navbar12_dropdown-content")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-size-small",
                      "text-weight-semibold"
                    )}
                    tag="h4"
                  >
                    {"Page group one"}
                  </_Builtin.Heading>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page One"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Two"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Three"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Four"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "navbar12_dropdown-link-list")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(
                      _styles,
                      "text-size-small",
                      "text-weight-semibold"
                    )}
                    tag="h4"
                  >
                    {"Page group two"}
                  </_Builtin.Heading>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Five"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Six"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Seven"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "navbar12_dropdown-link")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_icon-wrapper")}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(_styles, "icon-embed-xsmall")}
                        value="%3Csvg%20width%3D%22currentWidth%22%20height%3D%22currentHeight%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.73%207.12L20.59%206.87C20.4094%206.56769%2020.1547%206.31643%2019.85%206.14L13.14%202.27C12.8362%202.09375%2012.4913%202.00062%2012.14%202H11.85C11.4987%202.00062%2011.1538%202.09375%2010.85%202.27L4.14%206.15C3.83697%206.32526%203.58526%206.57697%203.41%206.88L3.27%207.13C3.09375%207.43384%203.00062%207.77874%203%208.13V15.88C3.00062%2016.2313%203.09375%2016.5762%203.27%2016.88L3.41%2017.13C3.58979%2017.4295%203.84049%2017.6802%204.14%2017.86L10.86%2021.73C11.1623%2021.9099%2011.5082%2022.0033%2011.86%2022H12.14C12.4913%2021.9994%2012.8362%2021.9063%2013.14%2021.73L19.85%2017.85C20.156%2017.6787%2020.4087%2017.426%2020.58%2017.12L20.73%2016.87C20.9041%2016.5653%2020.9971%2016.221%2021%2015.87V8.12C20.9994%207.76874%2020.9063%207.42384%2020.73%207.12ZM11.85%204H12.14L18%207.38L12%2010.84L6%207.38L11.85%204ZM13%2019.5L18.85%2016.12L19%2015.87V9.11L13%2012.58V19.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "navbar12_text-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-weight-semibold")}
                        tag="div"
                      >
                        {"Page Eight"}
                      </_Builtin.Block>
                      <_Builtin.Paragraph
                        className={_utils.cx(
                          _styles,
                          "text-size-small",
                          "hide-mobile-landscape"
                        )}
                      >
                        {"Lorem ipsum dolor sit amet consectetur elit"}
                      </_Builtin.Paragraph>
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "navbar12_link")}
            options={{
              href: "https://delgrossos.centeredgeonline.com/",
              target: "_blank",
            }}
          >
            {"Store"}
          </_Builtin.NavbarLink>
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar12_menu-buttons")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "is-icon")}
              button={false}
              options={{
                href: "#",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon-embed-xsmall")}
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%20class%3D%22iconify%20iconify--heroicons%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M2.25%206.75c0%208.284%206.716%2015%2015%2015h2.25a2.25%202.25%200%200%200%202.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97%201.293c-.282.376-.769.542-1.21.38a12.035%2012.035%200%200%201-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963%203.102a1.125%201.125%200%200%200-1.091-.852H4.5A2.25%202.25%200%200%200%202.25%204.5z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
              />
              <_Builtin.Block tag="div">
                {"Call Us"}
                <_Builtin.Span
                  className={_utils.cx(_styles, "is-hidden-desktop")}
                >
                  {" 814-684-3538"}
                </_Builtin.Span>
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.HtmlEmbed />
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "navbar12_menu-button")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-icon1")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-top")}
              tag="div"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-middle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon_line-middle-inner")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon1_line-bottom")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
