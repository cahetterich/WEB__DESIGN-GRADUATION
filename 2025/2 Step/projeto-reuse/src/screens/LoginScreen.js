//src/screens/LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <Button title="Esqueceu a senha?" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
}

