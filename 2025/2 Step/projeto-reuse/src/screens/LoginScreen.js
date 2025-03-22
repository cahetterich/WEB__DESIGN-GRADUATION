//src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Bem-vindo! Faça login para continuar.</Text>
        
        <Text></Text>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        
        <Text></Text>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
        
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        <Text style={styles.socialLoginText}>Ou entre com sua rede social</Text>
        
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.signupText}>Ainda não tem uma conta? <Text style={styles.signupLink}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3D6262",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#414141",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: "#2082DE",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    textAlign: "left",
    color: "#2082DE",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  socialLoginText: {
    fontSize: 16,
    color: "#414141",
    textAlign: "center",
    marginVertical: 15,
  },
  socialButton: {
    backgroundColor: "#D1D1D1",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#414141",
  },
  signupText: {
    fontSize: 14,
    textAlign: "center",
    color: "#414141",
  },
  signupLink: {
    color: "#2082DE",
    fontWeight: "bold",
  },
});
