// // src/components/Header.js
// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function Header() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.header}>
//       <Text style={styles.logo}>ReUse!</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
//         <Text style={styles.buttonText}>Entrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 60, // Definimos um tamanho fixo para o header
//     backgroundColor: "#3D6262",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//     width: "100%",
//     zIndex: 1000, // Garante que o header sempre fique acima dos outros elementos
//   },
//   logo: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#F6F6F6",
//   },
//   button: {
//     backgroundColor: "#2082DE",
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// // src/components/Header.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();

  const isLoginScreen = route.name === "Login";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ReUse!</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate(isLoginScreen ? "Home" : "Login")} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>{isLoginScreen ? "Voltar" : "Entrar"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#3D6262",
    zIndex: 1000, 
  },
  header: {
    height: 70, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F6F6F6",
  },
  button: {
    backgroundColor: "#2082DE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

