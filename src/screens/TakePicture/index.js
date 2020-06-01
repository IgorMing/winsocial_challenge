import React, { createRef, Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { request, PERMISSIONS } from 'react-native-permissions';

import { GradientBG } from '../../commons/styles';
import Container, { Camera, PictureTakerButton } from './styles';
import CameraOverlay from './cameraOverlay';

export default class TakePicture extends Component {
  camera = createRef();

  componentDidMount() {
    request(PERMISSIONS.IOS.CAMERA).then(result => {
      console.log(result);
    });
  }

  takePicture = async () => {
    const pictureOptions = {
      quality: 1,
      base64: true,
      width: 300,
      height: 300,
    };

    try {
      const data = await this.camera.current.takePictureAsync(pictureOptions);
      this.props.navigation.navigate('PicturePreview', {
        image: data.base64,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <GradientBG>
          <Camera
            captureAudio={false}
            ref={this.camera}
            type={RNCamera.Constants.Type.front}
          />
          <CameraOverlay />
          <PictureTakerButton.Container onPress={this.takePicture}>
            <PictureTakerButton.SmallContainer />
          </PictureTakerButton.Container>
        </GradientBG>
      </Container>
    );
  }
}
