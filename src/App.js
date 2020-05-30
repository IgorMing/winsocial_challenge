import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Navigator from './navigator';
import theme from './commons/theme';
import MyStatusBar from './components/StatusBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyStatusBar />
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
