import Link from 'next/link';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/mode';

interface IProps {
  mode: ModeType;
}

export const Footer = ({ mode, ...props }) => {
  return (
    <Container mode={mode}>
      <InfoBox>
        <InstaInfo>
          INSTA <Link href={'https://instagram.com/pearluk_kr'}>@pearluk_kr</Link>
        </InstaInfo>
        <BusinessInfo>PEARLUK (펄럭)</BusinessInfo>
        <BusinessInfo>OWNER 이건호</BusinessInfo>
        <BusinessInfo>BUSINESS NO 203-78-81668</BusinessInfo>
        <BusinessInfo>TELL 010-9465-7093</BusinessInfo>
        <BusinessInfo>EMAIL gunho227@naver.ocm</BusinessInfo>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div<{ mode: ModeType }>`
  width: 100%;
  height: 20rem;
  display: flex;
  z-index: 0;
  /* transform: translateY(-100%); */
  justify-content: center;
  position: absolute;
  padding: 1.6rem;

  /* color: #8f8c8c; */
  /* background-color: black; */
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.grey050 : theme.color.grey.black)};
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  padding-bottom: 8rem;

  a {
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.grey050 : theme.color.grey.black)};
  }
  a:visited {
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.grey050 : theme.color.grey.black)};
  }
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
