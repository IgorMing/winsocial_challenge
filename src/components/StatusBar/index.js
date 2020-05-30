import React from 'react';
import { StatusBar, View } from 'react-native';
import theme from '../../commons/theme';

const MyStatusBar = () => {
  return (
    <View>
      <StatusBar
        translucent
        barStyle={theme.statusBar?.content}
        backgroundColor={theme.statusBar?.darktext}
      />
    </View>
  );
};

export default MyStatusBar;
