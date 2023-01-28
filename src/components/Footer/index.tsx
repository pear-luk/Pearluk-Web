import styled from 'styled-components';

export const Footer = ({ ...props }) => {
  return (
    <Container>
      <InfoBox>
        <InstaInfo>INSTA @pearluk_kr</InstaInfo>
        <BusinessInfo>PEARLUK (펄럭)</BusinessInfo>
        <BusinessInfo>OWNER 이건호</BusinessInfo>
        <BusinessInfo>BUSINESS NO 203-78-81668</BusinessInfo>
        <BusinessInfo>TELL 010-9465-7093</BusinessInfo>
        <BusinessInfo>EMAIL gunho227@naver.ocm</BusinessInfo>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  z-index: 0;
  transform: translateY(-100%);
  justify-content: center;
  position: absolute;
  padding: 1.6rem;

  color: #8f8c8c;
  background-color: black;
  padding-bottom: 8rem;
`;
const InfoBox = styled.div`
  height: auto;

  /* background-color: blue; */
`;

const Info = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const InstaInfo = styled(Info)`
  margin-bottom: 2rem;
`;

const BusinessInfo = styled(Info)`
  margin-bottom: 0.2rem; // 2px이 더 보기 좋은듯?
`;
