import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import HomeScreen from './screens/Home';
import NameScreen from './screens/Name';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const theme = useTheme();
  const options = {
    title: '',
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
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
        <Stack.Screen options={options} name="Name" component={NameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
