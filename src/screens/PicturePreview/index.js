import React from 'react';

import Container, { Picture } from './styles';
import { GradientBG } from '../../commons/styles';

const PicturePreview = ({ route }) => {
  const { image } = route.params;

  return (
    <Container>
      <GradientBG>
        <Picture image={image} />
      </GradientBG>
    </Container>
  );
};

export default PicturePreview;
