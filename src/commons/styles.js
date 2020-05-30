import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const GradientBG = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.darktext, theme.colors.light],
}))`
  flex: 1;
  width: ${SCREEN_WIDTH}px;
  justify-content: center;
  align-items: center;
`;
