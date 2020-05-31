import React from 'react';
import { Text, View } from 'react-native';

import { GradientBG } from '../../commons/styles';

const TakePicture = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GradientBG>
        <Text>Picture screen</Text>
      </GradientBG>
    </View>
  );
};

export default TakePicture;
