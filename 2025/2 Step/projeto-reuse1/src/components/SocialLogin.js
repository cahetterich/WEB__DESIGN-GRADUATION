import React from 'react';
import { View } from 'react-native';
import Button from './Button';

const SocialLogin = () => {
  return (
    <View>
      <Button title="Entrar com Facebook" style={{ backgroundColor: '#3b5998' }} />
      <Button title="Entrar com Google" style={{ backgroundColor: '#db4437' }} />
    </View>
  );
};

export default SocialLogin;
