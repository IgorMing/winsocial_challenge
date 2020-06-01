import React, { useEffect } from 'react';

import Container, { Picture, PictureContainer } from './styles';
import { GradientBG } from '../../commons/styles';
import { fetchPictureInfo } from './api';

const PicturePreview = ({ route }) => {
  const imageSuffix = 'data:image/gif;base64,';
  const { image } = route.params;
  const imageUri = `${imageSuffix}${image}`;

  useEffect(() => {
    async function getInfo() {
      try {
        await fetchPictureInfo(imageUri);
      } catch (err) {
        // TODO add the error code here
      }
    }
    getInfo();
  }, [imageUri]);

  return (
    <GradientBG>
      <Container>
        <PictureContainer>
          <Picture uri={imageUri} />
        </PictureContainer>
      </Container>
    </GradientBG>
  );
};

export default PicturePreview;
