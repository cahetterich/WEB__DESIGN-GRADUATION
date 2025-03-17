// src/theme/GlobalStyles.js
import { StyleSheet } from "react-native";
import { typography } from "./theme";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "transparent",
  },
  text: {
    fontFamily: typography.text,
    fontSize: 16,
    color: "inherit",
  },
  title: {
    fontFamily: typography.title,
    fontSize: 24,
    fontWeight: "bold",
    color: "inherit",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GlobalStyles;




// import { StyleSheet } from "react-native";
// import { lightTheme } from "./theme";

// const GlobalStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: lightTheme.background,
//     padding: 16,
//   },
//   text: {
//     color: lightTheme.textPrimary,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: lightTheme.primary,
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default GlobalStyles;
