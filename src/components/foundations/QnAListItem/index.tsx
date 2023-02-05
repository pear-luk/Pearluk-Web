import Image from 'next/image';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';

interface Props {
  mode: ModeType;

  qustion: Omit<Question, 'password'>;
}

export const QnAListItem = ({ mode, qustion }: Props) => {
  const { question_id, title, writer, secret_mode, created_at, answer_count } = qustion;
  const { nickname } = writer as Pick<User, 'nickname' | 'user_id'>;
  return (
    <Container mode={mode}>
      <TitleBox>
        <IconBox>
          {Boolean(secret_mode) && <Image alt="잠금버튼" src="./icon/lock.svg" width={10} height={10}></Image>}
        </IconBox>
        <Title>{title}</Title>
        <IconBox>({answer_count})</IconBox>
      </TitleBox>
      <InfoBox>
        <InfoItem>{nickname}</InfoItem>
        <InfoItem>{new Date(created_at).toLocaleDateString()}</InfoItem>
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
