import React, { useReducer, useLayoutEffect } from 'react';
import Page from '../../components/Page';
import { Bold, Title } from '../../components/Text/styles';
import reducer, { INITIAL_STATE, update, goBack } from './duck';
import { getStepByIndex } from './steps';
import { HeaderBackButton } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

const DefaultScreen = ({ navigation }) => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { currentIndex } = state;
  const step = getStepByIndex(currentIndex);
  console.log(state);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ onPress }) => (
        <HeaderBackButton
          tintColor={theme.colors.lighttext}
          onPress={() => {
            if (currentIndex === 0) {
              onPress();
              return;
            }

            dispatch(goBack());
          }}
          labelVisible={false}
        />
      ),
    });
  }, [currentIndex, navigation, theme.colors.lighttext]);

  return (
    <Page
      onPress={() => dispatch(update())}
      percentage={step.percentage}
      placeholder={step.placeholder}
      secure={step.secure}
      title={
        <Title>
          {step.title}
          <Bold> {step.bold}</Bold>
        </Title>
      }
    />
  );
};

export default DefaultScreen;
