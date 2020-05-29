import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Button = {
  Container: styled.TouchableOpacity`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 300px;
    padding-vertical: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #333;
  `,
  Text: styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.darktext};
    font-family: ${({ theme }) => theme.font.fontFamily};
  `,
};
