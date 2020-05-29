import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const CONSIDERED_WIDTH = SCREEN_WIDTH * 0.8;

export default {
  Main: styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
  `,
  TopContainer: styled.View`
    flex: 5;
    justify-content: center;
    align-items: center;
  `,
  BottomContainer: styled.View`
    flex: 1;
    justify-content: flex-end;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${SCREEN_WIDTH}px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
Button.Text = styled.Text`
  color: ${({ theme }) => theme.colors.darktext};
  font-size: 20px;
`;
