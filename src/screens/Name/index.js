import React from 'react';
import Containers, { Input, Title, Bold, Button } from './styles';
import { GradientBG } from '../../commons/styles';

const NameScreen = () => {
  return (
    <Containers.Main>
      <GradientBG>
        <Containers.TopContainer>
          <Title>
            Digite seu <Bold>nome completo</Bold>
          </Title>
          <Input placeholder="Ex: João da Silva" />
        </Containers.TopContainer>
        <Containers.BottomContainer>
          <Button>
            <Button.Text>Avançar</Button.Text>
          </Button>
        </Containers.BottomContainer>
      </GradientBG>
    </Containers.Main>
  );
};

export default NameScreen;
