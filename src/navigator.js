import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import HomeScreen from './screens/Home';
import Onboarding from './screens/Onboarding';
import TakePicture from './screens/TakePicture';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: theme.colors.lighttext,
          }}
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          options={{
            title: 'Positione seu rosto',
            headerBackTitleVisible: false,
            headerTintColor: theme.colors.lighttext,
            headerStyle: {
              backgroundColor: theme.colors.darktext,
            },
          }}
          name="TakePicture"
          component={TakePicture}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
