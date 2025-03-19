//src/styles/globalStyles.js

import { StyleSheet } from "react-native";
import { getTheme } from "./theme";

const theme = getTheme();

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: theme.text,
  },
});
