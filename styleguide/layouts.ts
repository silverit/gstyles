import type { StyleSheet as SS } from "react-native";
export interface IRoot {
  flex1: object;
  flex2: object;
  wrap: object;
  noWrap: object;
  displayNone: object;
  itemsCenter: object;
  justifyCenter: object;
}
export const root: SS.NamedStyles<IRoot> = {
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  wrap: {
    flexWrap: "wrap",
  },
  noWrap: {
    flexWrap: "nowrap",
  },
  displayNone: {
    display: "none",
  },
  itemsCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
};
export interface IRow {
  start: object;
  startCenter: object;
  reverse: object;
  startEnd: object;
  center: object;
  // middle: object;
  between: object;
  around: object;
  wrap: object;
  noWrap: object;
}
export const row: SS.NamedStyles<IRow> = {
  start: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  startCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  startEnd: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  reverse: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  center: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  // middle: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  between: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  around: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  wrap: {
    flexWrap: "wrap",
  },
  noWrap: {
    flexWrap: "nowrap",
  },
};
export interface ICol {
  start: object;
  startCenter: object;
  end: object;
  middle: object;
  center: object;
  between: object;
  around: object;
  wrap: object;
  noWrap: object;
}
export const col: SS.NamedStyles<ICol> = {
  start: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  startCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  end: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  between: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  around: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  wrap: {
    flexWrap: "wrap",
  },
  noWrap: {
    flexWrap: "nowrap",
  },
};
export interface IZIndex {
  z0: object;
  z10: object;
  z20: object;
  z30: object;
  z40: object;
  z50: object;
}
export const zIndex: object = {
  z0: { zIndex: 0 },
  z10: { zIndex: 10 },
  z20: { zIndex: 20 },
  z30: { zIndex: 30 },
  z40: { zIndex: 40 },
  z50: { zIndex: 50 },
};
export interface IPositions {
  bottom: object;
  top: object;
  topLeft: object;
  topRight: object;
  full: object;
  absolute: object;
  relative: object;
}
export const positions: SS.NamedStyles<IPositions> = {
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  top: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  topLeft: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  full: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
};
