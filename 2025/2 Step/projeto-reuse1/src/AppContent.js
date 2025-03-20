// src/AppContent.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "./theme/ThemeContext";
import Navigation from "./navigation/Navigation";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContent;
