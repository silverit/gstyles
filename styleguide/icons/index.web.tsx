import React from "react";
import _ from "lodash";
import colors from "../colors";
import { hexToCSSFilter } from "hex-to-css-filter";
import { replaceAll, isNumber, get, isEmpty, isString } from "../../utils";

// eslint-disable-next-line
// @ts-ignore:next-line
const reqSvgs = require.context("./svgs", true, /\.svg$/);
export const allSvgs = reqSvgs.keys().reduce((images: any, path: string) => {
  const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
  images[key] = reqSvgs(path).default;
  //   if (_.isObject(images[key])) images[key].name = key;
  return images;
}, {});
export interface IconProps {
  name?: string;
  style?: object;
  size?: number;
  color?: string; // là path của colors trong styleguide. (lấy mã màu)
  [key: string]: any;
}
export const getFilterCss = (color: string) => {
  try {
    const cssFilter = hexToCSSFilter(color, {
      acceptanceLossPercentage: 1,
      maxChecks: 10,
    });
    const cssFilterValue = cssFilter.filter.replace(";", "");
    return { filter: cssFilterValue };
  } catch (err) {}
  return {};
};

export const Icons = ({
  name = "",
  size = 24,
  color = "",
  style,
  ...props
}: IconProps) => {
  if (!name) return null;
  color = replaceAll(color, "-", ".");
  const image = allSvgs[name];
  if (!image) return null;
  if (!isEmpty(color) && isString(get(colors, color)))
    color = get(colors, color);
  if (!isNumber(size)) size = 24;
  return (
    <img
      {...props}
      style={{
        // transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
        ...getFilterCss(color),
        ...style,
      }}
      src={get(image, "src")}
      width={isNumber(size) ? size : 24}
      height={isNumber(size) ? size : 24}
    />
  );
};
export default Icons;
