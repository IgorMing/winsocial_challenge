import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Navigator from './navigator';
import theme from './commons/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={theme.statusBar?.content}
        backgroundColor={theme.statusBar?.darktext}
      />
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
