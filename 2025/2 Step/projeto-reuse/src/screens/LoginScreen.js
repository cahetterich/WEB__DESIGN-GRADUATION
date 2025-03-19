// import React, { useState } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import Input from "../components/Input";
// import Button from "../components/Button";
// import SocialLogin from "../components/SocialLogin";
// import GlobalStyles from "../theme/GlobalStyles";

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <View style={GlobalStyles.container}>
//       <Text style={GlobalStyles.title}>Acesso ao Sistema</Text>

//       <Input placeholder="Email" value={email} onChangeText={setEmail} />
//       <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />

//       <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
//         <Text style={GlobalStyles.forgotPassword}>Esqueci minha senha</Text>
//       </TouchableOpacity>

//       <Button title="Entrar" onPress={() => console.log("Login")} />
//       <Text style={GlobalStyles.socialText}>Entrar com sua rede social</Text>
//       <SocialLogin />

//       <TouchableOpacity onPress={() => navigation.navigate("Register")}>
//         <Text style={GlobalStyles.register}>Cadastre-se</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;

// src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialLogin from "../components/SocialLogin";
import GlobalStyles from "../theme/GlobalStyles";
import useCustomFonts from "../theme/useFonts";

const LoginScreen = ({ navigation }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const fontsLoaded = useCustomFonts();

  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      console.log("Login realizado");
      setLoading(false);
    }, 2000);
  };

  if (!fontsLoaded) {
    return (
      <View style={GlobalStyles.loadingContainer}>
        <ActivityIndicator size="large" color={GlobalStyles.primaryColor} />
        <Text style={GlobalStyles.loadingText}>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Acesso ao Sistema</Text>

      <Input
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <Input
        placeholder="Senha"
        value={form.password}
        onChangeText={(text) => setForm({ ...form, password: text })}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={GlobalStyles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <Button title={loading ? "Entrando..." : "Entrar"} onPress={handleLogin} disabled={loading} />

      <Text style={GlobalStyles.socialText}>Entrar com sua rede social</Text>
      <SocialLogin />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={GlobalStyles.register}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

