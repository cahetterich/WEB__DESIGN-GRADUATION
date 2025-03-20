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


// import React, { useEffect, useState } from "react";
// import { View, ActivityIndicator } from "react-native";
// import { ThemeProvider } from "./theme/ThemeContext";
// import AppContent from "./AppContent";
// import { loadFonts } from "./theme/useFonts";

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     async function loadAssets() {
//       await loadFonts();
//       setFontsLoaded(true);
//     }
//     loadAssets();
//   }, []);

//   if (!fontsLoaded) {
//     return <ActivityIndicator size="large" />;
//   }

//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }

// src/App.js
import React from "react";
import { ThemeProvider } from "./theme/ThemeContext";
import AppContent from "./AppContent";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
