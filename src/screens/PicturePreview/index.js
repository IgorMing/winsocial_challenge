import React, { useEffect, useState } from 'react';

import Container, {
  Info,
  Picture,
  PictureContainer,
  TakeAnotherBtn,
} from './styles';
import { GradientBG } from '../../commons/styles';
import { fetchPictureInfo } from './api';
import { ActivityIndicator } from 'react-native';

const PicturePreview = ({ navigation, route }) => {
  const imageSuffix = 'data:image/gif;base64,';
  const { image } = route.params;
  const imageUri = `${imageSuffix}${image}`;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);

  useEffect(() => {
    async function getInfo() {
      try {
        const response = await fetchPictureInfo(imageUri);
        setAge(response.age);
        setGender(response.gender);
      } catch (err) {
        setError('Não foi possível encontrar suas informações');
      } finally {
        setLoading(false);
      }
    }
    getInfo();
  }, [imageUri]);

  function getGender(genderChar) {
    switch (genderChar) {
      case 'M':
        return 'Masculino';
      case 'F':
        return 'Feminino';
      default:
        return 'Gênero não identificado';
    }
  }

  function renderData() {
    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Info.Data>{error}</Info.Data>;
    }

    return (
      <>
        <Info.IndividualContainer>
          <Info.Label>Idade:</Info.Label>
          <Info.Data>{age}</Info.Data>
        </Info.IndividualContainer>
        <Info.IndividualContainer>
          <Info.Label>Gênero:</Info.Label>
          <Info.Data>{getGender(gender)}</Info.Data>
        </Info.IndividualContainer>
      </>
    );
  }

  return (
    <GradientBG>
      <Container>
        <PictureContainer>
          <Picture uri={imageUri} />
        </PictureContainer>
        <Info.Container>
          {renderData()}
          <TakeAnotherBtn.Container onPress={navigation.goBack}>
            <TakeAnotherBtn.Text>Tirar outra foto</TakeAnotherBtn.Text>
          </TakeAnotherBtn.Container>
        </Info.Container>
      </Container>
    </GradientBG>
  );
};

export default PicturePreview;
