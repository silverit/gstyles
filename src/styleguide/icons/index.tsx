import React from "react";
import { isObject, set } from "lodash";
import { sizeUtils } from "../sizes";

// @ts-ignore:next-line
const reqSvgs = require.context("./svgs", true, /\.svg$/);

export const allSvgs = reqSvgs.keys().reduce((images: any, path: string) => {
  const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
  images[key] = reqSvgs(path).default;
  if (isObject(images[key])) set(images, `${key}.name`, key);
  return images;
}, {});
export interface IconProps {
  name?: string;
  style?: object;
  size?: number;
  color?: string; // là path của colors trong styleguide. (lấy mã màu)
  [key: string]: any;
}

export const Icons = ({
  name,
  size = 22,
  onError,
  nameError,
  color,
  ...props
}: IconProps) => {
  const Comp: any = allSvgs[name];
  if (!!color) {
    props.cfill = color;
  }
  if (!Comp) return null;
  const sizeProps =
    size !== undefined
      ? { width: sizeUtils.normalize(size), height: sizeUtils.normalize(size) }
      : {};
  return <Comp {...sizeProps} {...props} />;
};
export const icons: (props: IconProps) => React.JSX.Element = (
  props: IconProps
) => <Icons {...props} />;
export default Icons;
