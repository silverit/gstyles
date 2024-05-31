import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
import config from "../config";
const { DESIGN_WIDTH } = config;
export interface ISizes {
  cardItem: object;
  banner: object;
}

export const sizes = {
  cardItem: {
    width: 220,
    height: 208,
  },
  banner: {
    width: 343,
    height: 192,
  },
};
export const sizeWH = {
  height: {
    h100: {
      height: "100%",
    },
    full: {
      height,
    },
  },
  width: {
    w100: {
      width: "100%",
    },
    full: {
      width,
    },
  },
  minHeight: {
    full: { minHeight: height },
  },
  minWidth: {
    full: { minWidth: width },
  },
};
export interface ISizeUtils {
  square: (size: number) => { width: number; height: number };
  rect: (size: number, ratio: number) => { width: number; height?: number };
  normalize: (size: number) => number;
}
export const sizeUtils = {
  square: (size: number) => {
    const newSize = sizeUtils.normalize(size);
    return { width: newSize, height: newSize };
  },
  rect: (width: number, ratio: number) => {
    const newWidth = sizeUtils.normalize(width);
    return {
      width: newWidth,
      ...(ratio === undefined ? {} : { height: newWidth * ratio }),
    };
  },
  normalize: (size: number) => {
    const scale = width / DESIGN_WIDTH;
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  },
};
