import { colors } from "./colors";
import { opacity } from "../utils";
export interface IFonts {
  bold: object;
  semibold: object;
  medium: object;
  regular: object;
  light: object;
  lg: object;
  lg2: object;
  md: object;
  md2: object;
  sm: object;
  sm2: object;
  uppercase: object;
}
export const listFontFace = {
  regular: "AvenirNext-Regular",
  medium: "AvenirNext-Medium",
  semibold: "AvenirNext-DemiBold",
};
export const fonts = {
  bold: {
    fontWeight: "700",
  },
  semibold: {
    fontWeight: "600",
  },
  medium: {
    fontWeight: "500",
  },
  regular: {
    fontWeight: "400",
  },
  light: {
    fontWeight: "300",
  },
  lg: {
    fontSize: 20,
  },
  lg2: {
    fontSize: 18,
  },
  md: {
    fontSize: 16,
  },
  md2: {
    fontSize: 14,
  },
  sm: {
    fontSize: 12,
  },
  sm2: {
    fontSize: 10,
  },
  uppercase: { textTransform: "uppercase" },
};
export interface ITexts {
  h1: object;
  h2: object;
  center: object;
  left: object;
  right: object;
  justify: object;
  [key: string]: any;
}
export const texts: ITexts = {
  default: {
    fontSize: 14,
    // lineHeight: 22,
    color: colors.black01,
  },
  h1: {
    fontSize: 32,
  },
  h2: {},
  center: {
    textAlign: "center",
  },

  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  justify: {
    textAlign: "justify",
  },
  // formik
  textInputField: {
    fontSize: 14,
    // lineHeight: 20,
    paddingVertical: 0,
    // lineHeight: "auto",
  },
  textSelectInput: {
    color: colors.black,
    fontSize: 14,
    // lineHeight: 14 * 1.5,
  },
  labelSliderPoint: {
    fontSize: 12,
    lineHeight: 16,
    color: opacity(colors.black01, 80),
    letterSpacing: 0.15,
  },
  textButton: {
    ...fonts.bold,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
  },
  point: {
    fontSize: 15,
    ...fonts.bold,
  },
  tabBarLabel: {
    fontSize: 12,
    lineHeight: 16,
  },
  headerWelcomeLabel: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  categoryLabel: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: "center",
  },
  sectionTitle: { fontSize: 16 },
  sectionDescription: {
    fontSize: 14,
  },
  cardTitle: {
    lineHeight: 18,
  },
  cardPersonalTitle: {
    lineHeight: 18,
    textAlign: "center",
  },
  cardName: {
    fontSize: 12,
    lineHeight: 16,
    color: opacity(colors.black01, 70),
  },
  cardPrice: {
    lineHeight: 18,
    color: colors.price,
  },
  cardOriginalPrice: {
    fontSize: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: opacity(colors.black01, 70),
  },
  cardVoucherLabel: {
    fontSize: 12,
    lineHeight: 16,
  },
  textLabelSearch: {
    fontSize: 14,
  },
  // shop
  textLayoutLabel: {
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  textShopCategory: {
    fontSize: 12,
    lineHeight: 16,
    textTransform: "uppercase",
  },
  textShopName: {
    fontSize: 20,
    lineHeight: 22,
  },
  textDetailFacility: {
    fontSize: 14,
    lineHeight: 22,
  },
  textAddressBrand: {
    fontSize: 14,
    lineHeight: 18,
  },
  // Review
  textReview: {
    fontSize: 14,
    lineHeight: 18,
    color: opacity(colors.black01, 70),
  },
  labelOption: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.black07,
  },
};
