export interface ISpacings {
  xsl: 64;
  xsl1: 60;
  xsl2: 56;
  xsl3: 52;
  sl: 48;
  sl1: 44;
  sl2: 40;
  sl3: 36;

  xxl: 32;
  xxl1: 30;
  xxl2: 28;
  xxl3: 26;
  xl: 24;
  xl1: 23;
  xl2: 22;
  xl3: 21;
  lg: 20;
  lg1: 19;
  lg2: 18;
  lg3: 17;
  md: 16;
  md1: 15;
  md2: 14;
  md3: 13;
  sm: 12;
  sm1: 11;
  sm2: 10;
  sm3: 9;
  xs: 8;
  xs1: 7;
  xs2: 6;
  xs3: 5;
  xss: 4;
  xss1: 3;
  xss2: 2;
  xss3: 1;
  none: 0;
}
const spacings: ISpacings = {
  xsl: 64,
  xsl1: 60,
  xsl2: 56,
  xsl3: 52,
  sl: 48,
  sl1: 44,
  sl2: 40,
  sl3: 36,
  xxl: 32,
  xxl1: 30,
  xxl2: 28,
  xxl3: 26,
  xl: 24,
  xl1: 23,
  xl2: 22,
  xl3: 21,
  lg: 20,
  lg1: 19,
  lg2: 18,
  lg3: 17,
  md: 16,
  md1: 15,
  md2: 14,
  md3: 13,
  sm: 12,
  sm1: 11,
  sm2: 10,
  sm3: 9,
  xs: 8,
  xs1: 7,
  xs2: 6,
  xs3: 5,
  xss: 4,
  xss1: 3,
  xss2: 2,
  xss3: 1,
  none: 0,
};
export interface IPaddings extends ISpacings {}
export const paddings: IPaddings = {
  ...spacings,
};

export interface IMargins extends ISpacings {}
export const margins: IMargins = {
  ...spacings,
};

export { spacings };
