//src/styles/theme.js

import { Appearance } from "react-native";

const lightTheme = {
  background: "#F6F6F6",
  text: "#414141",
  primary: "#81AA8B",
  secondary: "#C27949",
  error: "#E23636",
  warning: "#E2C036",
  link: "#2082DE",
};

const darkTheme = {
  background: "#414141",
  text: "#F6F6F6",
  primary: "#73A9A9",
  secondary: "#C3D6C7",
  error: "#E23636",
  warning: "#E2C036",
  link: "#2082DE",
};

export const getTheme = () => {
  return Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme;
};
