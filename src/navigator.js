import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import HomeScreen from './screens/Home';
import { createScreen } from './screens/DefaultScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const theme = useTheme();
  const options = {
    title: '',
    headerBackTitleVisible: false,
    headerTransparent: true,
    headerStyle: {},
    headerTintColor: theme.colors.lighttext,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={options}
          name="Name"
          component={createScreen({
            navigateTo: 'Email',
            percentage: 5,
            placeholder: 'Ex: João da Silva',
            title: 'Digite seu',
            bold: 'nome completo',
          })}
        />
        <Stack.Screen
          options={options}
          name="Email"
          component={createScreen({
            navigateTo: 'Phone',
            percentage: 10,
            placeholder: 'Ex: joao@dominio.com',
            title: 'Digite seu',
            bold: 'email',
          })}
        />
        <Stack.Screen
          options={options}
          name="Phone"
          component={createScreen({
            navigateTo: 'Doc',
            percentage: 15,
            placeholder: 'Ex: (19) 99573-4065',
            title: 'Digite seu',
            bold: 'celular',
          })}
        />
        <Stack.Screen
          options={options}
          name="Doc"
          component={createScreen({
            navigateTo: 'Password',
            percentage: 20,
            placeholder: 'Ex: 335.264.698-81',
            title: 'Digite seu',
            bold: 'CPF',
          })}
        />
        <Stack.Screen
          options={options}
          name="Password"
          component={createScreen({
            navigateTo: 'Password',
            percentage: 25,
            secure: true,
            placeholder: '******',
            title: 'Digite sua',
            bold: 'Senha',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
