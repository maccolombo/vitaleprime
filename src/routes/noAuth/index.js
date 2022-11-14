import React from 'react';
import Login from '~/pages/Login';
import Grupo from '~/pages/Login/grupo';
import Recuperar from '~/pages/Login/recuperar';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, ImageBackground, Platform, StyleSheet } from 'react-native';
import Colors from '~/styles/Colors';
const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Grupo"
      screenOptions={{
        headerBackground: () => (
          <Image
            style={{
              height: '100%'
            }}
            source={require('../../assets/background.png')}
          />
        ),
        //headerShown: false
        /* headerStyle: {
          backgroundColor: Colors.blue
        } */
      }}
    /*  screenOptions={{
       header: ({ scene, previous, navigation }) => (
         <Header scene={scene} previous={previous} navigation={navigation} />
       ),
     }} */
    >

      <Stack.Screen name="Grupo"
        component={Grupo}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackTitle: Platform.OS === "ios" ? "Voltar" : false,
          headerTitle: () => null,
          backgroundColor: Colors.blue,
          headerTintColor: Colors.light_text
        }}

      />


      <Stack.Screen name="Recuperar" component={Recuperar}
        options={{
          headerBackTitle: Platform.OS === "ios" ? "Voltar" : false,
          headerTitle: () => null,
          headerTintColor: Colors.light_text,
      
        }}
      />

    </Stack.Navigator>
  );
};

export default AuthRoutes;

