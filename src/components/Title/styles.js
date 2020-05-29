import styled from 'styled-components/native';

const Text = styled.Text`
  position: absolute;
  top: 90px;
  color: ${({ theme }) => theme.colors.lighttext};
  font-size: 36px;
  font-family: ${({ theme }) => theme.font.fontFamily};
`;

export const BoldText = styled(Text)`
  font-weight: bold;
`;

export default Text;
