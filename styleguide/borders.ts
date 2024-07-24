import { StyleSheet } from "react-native";

export const rounds = {
  none: 0,
  rounded: 4,
  xs: 8,
  xs2: 6,
  sm: 12,
  sm2: 10,
  md: 16,
  md2: 14,
  md3: 13,
  lg: 20,
  lg2: 18,
  xl: 24,
  xl2: 22,
  xxl: 32,
  xxl2: 28,
  full: 9999,
};
export interface IRadius {
  none: object;
  xs: object;
  sm: object;
  md: object;
  lg: object;
  xl: object;
  xl1: object;
  full: object;
  rounded: object;
}
export const radius = {
  none: {
    borderRadius: 0,
  },
  xs: {
    borderRadius: 2,
  },
  sm: {
    borderRadius: 6,
  },
  md: {
    borderRadius: 8,
  },
  lg: {
    borderRadius: 12,
  },
  xl: {
    borderRadius: 20,
  },
  xl1: {
    borderRadius: 24,
  },
  full: {
    borderRadius: 9999,
  },
  rounded: {
    borderRadius: 4,
  },
};

export const borders = {
  none: 0,
  hairline: StyleSheet.hairlineWidth,
  xs: 1,
  sm: 2,
  md: 4,
};
