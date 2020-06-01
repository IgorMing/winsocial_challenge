import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

const { width, height } = Dimensions.get('screen');

export default styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Camera = styled(RNCamera)`
  height: ${height}px;
  width: ${width}px;
`;

export const PictureTakerButton = {
  Container: styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  SmallContainer: styled.View`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: 2px solid lightgray;
    background-color: white;
  `,
};
