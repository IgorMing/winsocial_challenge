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
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen
          options={options}
          name="TakePicture"
          component={TakePicture}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
