import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.lighttext};
  padding-bottom: 30px;
`;

export const Bold = styled(Title)`
  font-weight: bold;
`;
