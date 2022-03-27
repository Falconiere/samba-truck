import { Theme } from "native-base";
import { IColorHues } from "native-base/lib/typescript/theme/base/colors";

const brand: BrandColors = {
  orange: "#F85E10",
  lightblue: "#6292C2",
  mediumblue: "#2F6491",
  darkblue: "#1A223B",
  black: "#1B202B",
  gray: "#7F8B93",
  lightgray: "#F1EDE3",
  lighterblue: "#E4FFFF",
  purple: "#7B3BA0",
  yellow: "#FFF0C1",
};

const grays: Grays = {
  light: "#EEE",
  dark: "#727272",
  inactive: "#9E9E9E",
  medium: "#AAB2BA",
};

export const colors: Colors = {
  black: brand.black,
  white: "#fff",
  lightText: "#fff",
  darkText: "#000",
  // Main colors
  primary: brand.purple,
  secondary: brand.orange,
  grey: {
    50: "#EEE",
    100: "#E9EBEE",
    200: "#AAB2BA",
    300: "#9E9E9E",
    400: brand.gray,
    700: "#152335",
    800: "#333333",
    900: "#2B2B2B",
  },
  background: "#FFFBF2",
  success: "#45B74A",
  info: { default: "#509FF4", dark: "#4189D6" },
  error: { default: "#CC3F40", light: "#FF3F40" },
  warning: "#B2952D",
  brand,
  grays,
};

interface BrandColors {
  orange: string;
  purple: string;
  lightblue: string;
  mediumblue: string;
  darkblue: string;
  black: string;
  gray: string;
  lighterblue: string;
  yellow: string;
  lightgray: string;
}

interface Grays {
  light: string;
  inactive: string;
  dark: string;
  medium: string;
}

export interface Colors
  extends Pick<Theme["colors"], "black" | "white" | "lightText" | "darkText"> {
  primary: string;
  secondary: string;
  background: string;
  success: string;
  info: { default: string; dark: string };
  warning: string;
  error: { default: string; light: string };
  brand: BrandColors;
  grays: Grays;
  grey: Pick<IColorHues, 50 | 100 | 200 | 300 | 400 | 700 | 800 | 900>;
}
