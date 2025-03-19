//src/utils/responsiveFont.js
import { PixelRatio } from "react-native";

export const responsiveFontSize = (size) => {
  return PixelRatio.getFontScale() * size;
};
