import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Containers, { Input, Title, Bold, Button } from './styles';
import { GradientBG } from '../../commons/styles';

const NameScreen = () => {
  return (
    <Containers.Keyboard>
      <GradientBG>
        <Containers.Main>
          <Title>
            Digite seu <Bold>nome completo</Bold>
          </Title>
          <Input placeholder="Ex: João da Silva" />
          <Button>
            <AnimatedCircularProgress
              size={110}
              width={3}
              fill={15}
              tintColor="white"
              backgroundColor="#3d5875">
              {() => <Button.Text>Avançar</Button.Text>}
            </AnimatedCircularProgress>
          </Button>
        </Containers.Main>
      </GradientBG>
    </Containers.Keyboard>
  );
};

export default NameScreen;
