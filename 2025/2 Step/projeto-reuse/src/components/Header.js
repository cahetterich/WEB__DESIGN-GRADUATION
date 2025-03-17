import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import Navigation from "../navigation/Navigation";
// import Header from "../components/Header";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header title="ReUse!" />
      <Navigation />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
