import React from 'react';

import Container, { Picture, PictureContainer } from './styles';
import { GradientBG } from '../../commons/styles';

const PicturePreview = ({ route }) => {
  const { image } = route.params;

  return (
    <GradientBG>
      <Container>
        <PictureContainer>
          <Picture image={image} />
        </PictureContainer>
      </Container>
    </GradientBG>
  );
};

export default PicturePreview;
