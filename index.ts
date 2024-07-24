import React from "react";
import { StyleSheet as SS } from "react-native";

import {
  root,
  row,
  col,
  zIndex,
  positions,
  IRoot,
  ICol,
  IRow,
  IZIndex,
  IPositions,
} from "./styleguide/layouts";
import {
  sizes,
  sizeWH,
  sizeUtils,
  ISizes,
  ISizeUtils,
} from "./styleguide/sizes";
import { colors, IColors } from "./styleguide/colors";
import { texts, fonts, listFontFace, ITexts, IFonts } from "./styleguide/texts";
import { paddings, margins, spacings } from "./styleguide/spacings";
import { radius, rounds, borders, IRadius } from "./styleguide/borders";
import { Icons, icons, IconProps } from "./styleguide/icons";
import { shadows, IShadows } from "./styleguide/shadows";
import { mapObject, opacity } from "./utils";
import { compact, has, get, clone, isString } from "lodash";
import { Dimensions, Platform, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

interface TSizes extends ISizes, ISizeUtils {}
interface GStyles extends IZIndex {
  root: IRoot;
  row: IRow;
  col: ICol;
  positions: IPositions;
  sizes: TSizes;
  colors: Record<string, object>;
  bgColors: Record<string, object>;
  borderColors: Record<string, object>;
  texts: ITexts;
  fonts: IFonts;
  paddings: Record<string, object>;
  margins: Record<string, object>;
  gaps: Record<string, object>;
  radius: IRadius;
  rounds: Record<string, object>;
  borders: Record<string, object>;
  Icons: React.FunctionComponent<any>;
  icons: (props: IconProps) => React.JSX.Element;
  shadows: IShadows;
  op: (color: string, op: number) => string;
  opacity: (style: SS.NamedStyles<any>, op: number) => any;
  SS: typeof SS;
  size: (val: number) => number;
  width: Record<string, object>;
  height: Record<string, object>;
  minWidth: Record<string, object>;
  minHeight: Record<string, object>;
  [key: string]: any;
}

const version = 112;

let gstyles: GStyles;
gstyles = {
  root,
  row,
  col,
  positions,
  zIndex,
  sizes: {
    ...sizes,
    ...sizeUtils,
  },
  colors: {},
  bgColors: {},
  borderColors: {},
  texts,
  fonts,
  paddings: {},
  margins: {},
  gaps: {},
  radius,
  rounds: {},
  borders: {},
  shadows,
  z0: {},
  z10: {},
  z20: {},
  z30: {},
  z40: {},
  z50: {},
  op: (color = "", number = 0) => "",
  opacity: () => ({}),
  Icons,
  icons,
  size: (val = 0) => val,
  width: {},
  height: {},
  minWidth: {},
  minHeight: {},
  SS,
};

const applyFontWeight = (allTexts: any) => {
  return mapObject(allTexts, (text, key) => {
    let result = { ...text };
    if (has(listFontFace, key)) result.fontFamily = get(listFontFace, key);
    return [result];
  });
};
const applyFontSize = (allTexts: any) =>
  mapObject(allTexts, (text) => {
    let result = clone(text);
    const defaultFontSize = get(text, "fontSize");
    const defaultLineHeight = get(text, "lineHeight");
    if (!!defaultFontSize) {
      result.fontSize = sizeUtils.normalize(defaultFontSize);
    }
    if (!!defaultLineHeight) {
      result.lineHeight = sizeUtils.normalize(defaultLineHeight);
    }
    return [result];
  });

const applySize = (sizes: object) =>
  mapObject(sizes, (size: number) => {
    return [sizeUtils.normalize(size)];
  });
const apllyFonts = (fonts: IFonts): any => {
  return SS.create(
    mapObject(applyFontWeight(fonts), (item) => {
      return [item];
    })
  );
};
const applyText = (texts: ITexts): any => {
  return {
    ...mapObject(applyFontSize(texts), (item) => [
      {
        ...item,
        fontFamily: get(listFontFace, "regular"),
      },
    ]),
    ...mapObject(applyFontSize(texts), (item, key) => [
      {
        ...item,
        fontFamily: get(listFontFace, "medium"),
      },
      `${key}_m`,
    ]),
    ...mapObject(applyFontSize(texts), (item, key) => [
      {
        ...item,
        fontFamily: get(listFontFace, "semibold"),
      },
      `${key}_b`,
    ]),
  };
};
const makeStyles = (config: any = {}) => {
  const {
    root: cRoot,
    row: cRow,
    col: cCol,
    zIndex: cZIndex,
    positions: cPositions,
  } = config;
  gstyles.root = SS.create(root);
  gstyles.row = SS.create(row);
  gstyles.col = SS.create(col);
  gstyles.positions = SS.create(positions);

  const zIndexStyles: { [key: string]: any } = mapObject(zIndex, (item) => [
    item,
  ]);
  Object.keys(zIndexStyles).forEach((key) => {
    gstyles[key] = SS.create(zIndexStyles[key]);
  });

  // Sizes
  gstyles.sizes = {
    ...SS.create(sizes),
    ...sizeUtils,
  };
  gstyles.size = sizeUtils.normalize;

  // Colors
  gstyles.colors = SS.create(mapObject(colors, (item) => [{ color: item }]));
  gstyles.bgColors = SS.create(
    mapObject(colors, (item) => [{ backgroundColor: item }])
  );
  gstyles.borderColors = SS.create(
    mapObject(colors, (item) => [{ borderColor: item }])
  );
  // Typography
  gstyles.texts = applyText(texts);
  gstyles.fonts = apllyFonts(fonts);
  // Spacing
  gstyles.paddings = {
    ...SS.create(mapObject(applySize(paddings), (val) => [{ padding: val }])),
    ...SS.create(
      mapObject(applySize(paddings), (val, key) => [
        { paddingHorizontal: val },
        `x_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(paddings), (val, key) => [
        { paddingVertical: val },
        `y_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(paddings), (val, key) => [
        { paddingLeft: val },
        `l_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(paddings), (val, key) => [
        { paddingRight: val },
        `r_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(paddings), (val, key) => [
        { paddingTop: val },
        `t_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(paddings), (val, key) => [
        { paddingBottom: val },
        `b_${key}`,
      ])
    ),
  };
  gstyles.margins = {
    ...SS.create(mapObject(applySize(margins), (val) => [{ margin: val }])),
    ...SS.create(
      mapObject(applySize(margins), (val, key) => [
        { marginHorizontal: val },
        `x_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(margins), (val, key) => [
        { marginVertical: val },
        `y_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(margins), (val, key) => [
        { marginLeft: val },
        `l_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(margins), (val, key) => [
        { marginRight: val },
        `r_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(margins), (val, key) => [
        { marginTop: val },
        `t_${key}`,
      ])
    ),
    ...SS.create(
      mapObject(applySize(margins), (val, key) => [
        { marginBottom: val },
        `b_${key}`,
      ])
    ),
  };
  gstyles.gaps = SS.create(mapObject(spacings, (val) => [{ gap: val }]));
  // Borders
  gstyles.radius = SS.create(radius);
  gstyles.rounds = Object.assign(
    {},
    ...[
      ["", ["borderRadius"]],
      ["t", ["borderTopLeftRadius", "borderTopRightRadius"]],
      ["tl", ["borderTopLeftRadius"]],
      ["tr", ["borderTopRightRadius"]],
      ["b", ["borderBottomLeftRadius", "borderBottomRightRadius"]],
      ["bl", ["borderBottomLeftRadius"]],
      ["br", ["borderBottomRightRadius"]],
      ["l", ["borderTopLeftRadius", "borderBottomLeftRadius"]],
      ["r", ["borderTopRightRadius", "borderBottomRightRadius"]],
    ].map(([suf, atts]: any) =>
      mapObject(applySize(rounds), (val, key) => [
        SS.create(mapObject(atts, (att) => [val, `${att}`])),
        `${compact([suf, key]).join("_")}`,
      ])
    )
  );
  gstyles.borders = {
    ...SS.create(
      mapObject(borders, (val) => [
        {
          borderTopWidth: val,
          borderRightWidth: val,
          borderBottomWidth: val,
          borderLeftWidth: val,
        },
      ])
    ),
    ...SS.create(
      mapObject(borders, (val, key) => [{ borderBottomWidth: val }, `b_${key}`])
    ),
    ...SS.create(
      mapObject(borders, (val, key) => [{ borderTopWidth: val }, `t_${key}`])
    ),
    ...SS.create(
      mapObject(borders, (val, key) => [{ borderLeftWidth: val }, `l_${key}`])
    ),
    ...SS.create(
      mapObject(borders, (val, key) => [{ borderRightWidth: val }, `r_${key}`])
    ),
  };
  // Shadows
  gstyles.shadows = SS.create(shadows);
  // Opacity
  gstyles.opacity = function (style: SS.NamedStyles<any>, op: number) {
    return mapObject(style, (val: any) => [opacity(val, op)]);
  };
  gstyles.op = opacity;
  // sizeWH
  const sizeWHStyles: { [key: string]: any } = mapObject(sizeWH, (item) => [
    item,
  ]);
  Object.keys(sizeWHStyles).forEach((key) => {
    gstyles[key] = SS.create(sizeWHStyles[key]);
  });
  gstyles.create = SS.create;
};
makeStyles({});
export { colors };
export default gstyles;
