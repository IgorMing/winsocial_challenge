import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTheme } from 'styled-components';

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
  const theme = useTheme();

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
              backgroundColor={theme.colors.border}>
              {() => <Button.Text>{buttonText}</Button.Text>}
            </AnimatedCircularProgress>
          </Button>
        </Containers.Main>
      </GradientBG>
    </Containers.Keyboard>
  );
};

export default Page;
