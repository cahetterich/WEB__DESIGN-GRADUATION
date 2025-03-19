
//src/components/Header.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getTheme } from "../styles/theme";

export default function Header() {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const theme = getTheme();

  return (
    <View style={[styles.header, { backgroundColor: theme.background }]}>
      <Text style={[styles.logo, { color: theme.primary }]}>ReUse!</Text>

      <View style={styles.navButtons}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.navText, { color: theme.text }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={[styles.navText, { color: theme.text }]}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
          <Text style={[styles.navText, { color: theme.warning }]}>
            {darkMode ? "🌞" : "🌙"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    height: 60,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  navButtons: {
    flexDirection: "row",
    gap: 15,
  },
  navText: {
    fontSize: 16,
  },
});
