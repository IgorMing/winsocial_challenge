import styled from 'styled-components/native';

import { Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const CONSIDERED_WIDTH = SCREEN_WIDTH * 0.8;

export default {
  Keyboard: styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  })`
    width: ${SCREEN_WIDTH}px;
    flex: 1;
  `,
  Main: styled.View`
    flex: 1;
    padding-top: 150px;
    align-items: flex-start;
  `,
};

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'lightgray',
  returnKeyType: 'next',
})`
  font-size: 22px;
  width: ${CONSIDERED_WIDTH}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lighttext};
  color: ${({ theme }) => theme.colors.lighttext};
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 60px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 70px;
`;
Button.Text = styled.Text`
  color: ${({ theme }) => theme.colors.lighttext};
  font-size: 20px;
`;
