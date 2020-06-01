import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export default styled.View`
  flex: 1;
  padding-top: 80px;
  align-items: center;
`;

export const Picture = styled.Image.attrs(({ uri }) => ({
  source: {
    uri,
  },
}))`
  height: 300px;
  width: 300px;
`;

export const PictureContainer = styled.View`
  border-radius: 150px;
  border: 4px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`;

export const Info = {
  Container: styled.View`
    flex: 1;
    justify-content: space-around;
    width: ${width}px;
    padding-top: 60px;
    padding-horizontal: ${({ theme }) => theme.measures.horizontalDistance};
  `,
  IndividualContainer: styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  `,
  Label: styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lighttext};
  `,
  Data: styled.Text`
    padding-left: 8px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.lighttext};
  `,
};

export const TakeAnotherBtn = {
  Container: styled.TouchableOpacity`
    align-items: center;
    border-radius: 25px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.darktext};
    padding: 12px;
  `,
  Text: styled.Text`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.lighttext};
  `,
};
