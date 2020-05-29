import React from 'react';

import { Button, Container, GradientBG } from './styles';
import Title from '../../components/Title';

const Signin = ({ navigation }) => {
  return (
    <Container>
      <GradientBG>
        <Title />
        <Button.Container
          onPress={() => {
            navigation.navigate('Name');
          }}>
          <Button.Text>Start</Button.Text>
        </Button.Container>
      </GradientBG>
    </Container>
  );
};

export default Signin;
