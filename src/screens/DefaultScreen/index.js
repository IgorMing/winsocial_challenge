import React from 'react';
import Page from '../../components/Page';
import { Bold, Title } from '../../components/Text/styles';

export const createScreen = ({
  bold,
  navigateTo,
  percentage,
  placeholder,
  secure,
  title,
}) => {
  return function({ navigation }) {
    return (
      <Page
        onPress={() => navigation.navigate(navigateTo)}
        percentage={percentage}
        placeholder={placeholder}
        secure={secure}
        title={
          <Title>
            {title}
            <Bold> {bold}</Bold>
          </Title>
        }
      />
    );
  };
};

export default createScreen;
