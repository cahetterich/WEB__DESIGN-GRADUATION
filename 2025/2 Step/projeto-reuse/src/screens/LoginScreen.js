import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesso ao Sistema</Text>

      <Text>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />

      <Text>Senha</Text>
      <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <CustomButton title="Entrar com Facebook" style={styles.facebookButton} />
      <CustomButton title="Entrar com Google" style={styles.googleButton} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#F6F6F6' },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 8 },
  forgotPassword: { textAlign: 'right', marginBottom: 20, color: 'blue' },
  register: { textAlign: 'center', marginTop: 10, color: 'blue' },
  facebookButton: { backgroundColor: '#3b5998' },
  googleButton: { backgroundColor: '#DB4437' },
});

export default LoginScreen;
