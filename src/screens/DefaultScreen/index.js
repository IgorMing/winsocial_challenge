import React, { useReducer, useLayoutEffect } from 'react';
import Page from '../../components/Page';
import { Bold, Title } from '../../components/Text/styles';
import reducer, { INITIAL_STATE, update, goBack, next } from './duck';
import { getStepByIndex, orderedKeys } from './steps';
import { HeaderBackButton } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

const DefaultScreen = ({ navigation }) => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { currentIndex } = state;
  const step = getStepByIndex(currentIndex);

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

  const value = state[orderedKeys[currentIndex]];

  return (
    <Page
      keyboardType={step.keyboardType}
      onChangeText={text => dispatch(update({ currentIndex, value: text }))}
      onPress={() => dispatch(next())}
      percentage={step.percentage}
      placeholder={step.placeholder}
      secure={step.secure}
      title={
        <Title>
          {step.title}
          <Bold> {step.bold}</Bold>
        </Title>
      }
      value={value}
    />
  );
};

export default DefaultScreen;
