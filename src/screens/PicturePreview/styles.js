import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  padding-top: 80px;
  /* justify-content: center; */
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
