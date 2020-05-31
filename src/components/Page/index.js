import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Containers, { Input, Button } from './styles';
import { GradientBG } from '../../commons/styles';

const Page = ({
  buttonText = 'Avançar',
  keyboardType = 'default',
  secure = false,
  onChangeText,
  nextStep,
  percentage = 0,
  placeholder,
  title,
  value = '',
}) => {
  function next() {
    nextStep(value);
  }

  return (
    <Containers.Keyboard>
      <GradientBG>
        <Containers.Main>
          {title}
          <Input
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            onSubmitEditing={next}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secure}
          />
          <Button onPress={next}>
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
