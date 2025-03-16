import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import LoginScreen from './screens/LoginScreen.js';

const Stack = createStackNavigator();

export default function App() {
  console.log("🚀 App.js foi carregado!");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
//   console.log("🚀 O App.js está rodando!");

//   return (
//     <View>
//       <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 50 }}>
//         🚀 O App está funcionando!
//       </Text>
//     </View>
//   );
// }