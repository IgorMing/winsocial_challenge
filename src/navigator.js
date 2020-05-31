import React from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import HomeScreen from './screens/Home';
import DefaultScreen from './screens/DefaultScreen';

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
            headerStyle: {},
            headerTintColor: theme.colors.lighttext,
          }}
          name="Onboarding"
          component={DefaultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
