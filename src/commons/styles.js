import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientBG = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.darktext, theme.colors.light],
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
