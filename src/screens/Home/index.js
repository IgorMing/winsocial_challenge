import React from 'react';

import { Button, Container } from './styles';
import Title from '../../components/Title';
import { GradientBG } from '../../commons/styles';

const Signin = ({ navigation }) => {
  return (
    <Container>
      <GradientBG>
        <Title />
        <Button.Container
          onPress={() => {
            navigation.navigate('Onboarding');
          }}>
          <Button.Text>Onboarding</Button.Text>
        </Button.Container>
      </GradientBG>
    </Container>
  );
};

export default Signin;
