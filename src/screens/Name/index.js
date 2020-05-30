import React from 'react';
import Page from '../../components/Page';
import { Bold, Title } from '../../components/Text/styles';

const NameScreen = () => {
  return (
    <Page
      percentage={30}
      placeholder="Ex: João da Silva"
      title={
        <Title>
          Digite seu <Bold>nome completo</Bold>
        </Title>
      }
    />
  );
};

export default NameScreen;
