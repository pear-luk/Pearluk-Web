import Image from 'next/image';
import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
interface IProps {
  mode: ModeType;
}

export const QA_Card = ({ mode, ...props }) => {
  return (
    <Container mode={mode}>
      <TitleBox>
        <IconBox>
          <Image alt="잠금버튼" src="./icon/lock.svg" width={10} height={10}></Image>
        </IconBox>
        <Title>{'아'.repeat(55)}...</Title>
        <IconBox>(0)</IconBox>
      </TitleBox>
      <InfoBox>
        <InfoItem>아아아아아아아아아아아아아</InfoItem>
        <InfoItem>2002.12.25</InfoItem>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  width: 29.4rem;
  height: 5.4rem;
  /* border-top: 0.1rem solid black; */
  border-bottom: 0.1rem solid black;

  padding: 0.8rem 0;
`;

const TitleBox = styled.div`
  display: flex;
  height: 2rem;
  width: 100%;
  justify-content: space-between;
`;
const Title = styled.div`
  text-align: left;
  width: 25.1rem;
  word-break: break-all;
`;

const IconBox = styled.div`
  width: auto;
  height: 1rem;
`;

const InfoBox = styled.div`
  margin-top: 0.8rem;
  display: flex;

  justify-content: space-between;
`;

const InfoItem = styled.div``;
