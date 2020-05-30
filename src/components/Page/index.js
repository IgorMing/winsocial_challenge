import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Containers, { Input, Button } from './styles';
import { GradientBG } from '../../commons/styles';

const Page = ({
  buttonText = 'Avançar',
  secure = false,
  onPress,
  percentage = 0,
  placeholder,
  title,
}) => {
  return (
    <Containers.Keyboard>
      <GradientBG>
        <Containers.Main>
          {title}
          <Input placeholder={placeholder} secureTextEntry={secure} />
          <Button onPress={onPress}>
            <AnimatedCircularProgress
              size={110}
              width={3}
              fill={percentage}
              tintColor="white"
              backgroundColor="#3d5875">
              {() => <Button.Text>{buttonText}</Button.Text>}
            </AnimatedCircularProgress>
          </Button>
        </Containers.Main>
      </GradientBG>
    </Containers.Keyboard>
  );
};

export default Page;
