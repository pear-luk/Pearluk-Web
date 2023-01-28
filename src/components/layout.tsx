import styled from 'styled-components';
import { Footer } from './Footer';
import { Nav } from './Nav';

const Container = styled.div`
  /* height: 100%; */
`;
const ContentContainer = styled.main`
  height: auto;
  min-height: calc(100vh);
  padding-top: 4.8rem;
  padding-bottom: 20rem;
`;

export const LayOut = ({ children }) => {
  return (
    <Container>
      <Nav />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
};
