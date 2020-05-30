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
    /* justify-content: center; */
    align-items: flex-start;
  `,
};

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.lighttext};
  padding-bottom: 30px;
`;

export const Bold = styled(Title)`
  font-weight: bold;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'lightgray',
})`
  font-size: 22px;
  width: ${CONSIDERED_WIDTH}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.lighttext};
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
