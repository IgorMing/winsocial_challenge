import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled.Image.attrs(({ image }) => ({
  source: {
    uri: `data:image/gif;base64,${image}`,
  },
}))`
  height: 300px;
  width: 300px;
`;
