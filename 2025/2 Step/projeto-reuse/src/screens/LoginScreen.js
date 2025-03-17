import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialLogin from '../components/SocialLogin';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesso ao Sistema</Text>

      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <Button title="Entrar" onPress={() => console.log('Login')} />
      <Text style={styles.socialText}>Entrar com sua rede social</Text>
      <SocialLogin />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#154242',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#154242',
    textDecorationLine: 'underline',
  },
  socialText: {
    marginVertical: 10,
    fontSize: 14,
  },
  register: {
    marginTop: 10,
    color: '#154242',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
