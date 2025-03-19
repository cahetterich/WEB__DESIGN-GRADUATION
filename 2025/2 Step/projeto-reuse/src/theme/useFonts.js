
//src/theme/useFonts.js
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Inter_400Regular } from "@expo-google-fonts/inter";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    Inter: Inter_400Regular,
  });

  return fontsLoaded;
};

