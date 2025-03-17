// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Navigation from './navigation/Navigation.js';

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Navigation />
//     </GestureHandlerRootView>
//   );
// }


import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "./theme/ThemeContext.js";
import Navigation from "./navigation/Navigation";
import Header from "./components/Header";

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

