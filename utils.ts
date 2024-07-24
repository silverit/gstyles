import { mapValues, startsWith } from "lodash";
import type { StyleSheet as SS } from "react-native";

export const mapObject = (
  obj: object | string[],
  cb: (val: any, key: string) => any
) => {
  const rtn: { [key: string]: object } = {};
  mapValues(obj, (val, key) => {
    const [newVal, newKey = key] = cb(val, key);
    rtn[newKey] = newVal;
  });
  return rtn;
};

export const opacity = (color: string, opacity: number) => {
  const hexCode = `${color}`;
  if (startsWith(color, "rgb(")) {
    const rgb = hexCode.match(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/);
    if (rgb) {
      const r = parseInt(rgb[1]);
      const g = parseInt(rgb[2]);
      const b = parseInt(rgb[3]);
      return `rgba(${r},${g},${b},${opacity / 100})`;
    }
  } else if (startsWith(color, "#")) {
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r},${g},${b},${opacity / 100})`;
  }
  return "";
};
