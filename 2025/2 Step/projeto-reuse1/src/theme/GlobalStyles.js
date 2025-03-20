//src/theme/GlobalStyles.js
import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F6F6F6",
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Regular",
    color: "#414141",
    marginBottom: 20,
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: "Inter-Regular", // Mudamos para Inter
    color: "#2082DE",
    marginVertical: 10,
  },
  socialText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#414141",
    marginTop: 20,
  },
  register: {
    fontSize: 16,
    fontFamily: "Inter-Regular", // Mudamos para Inter
    color: "#E23636",
    marginTop: 10,
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
