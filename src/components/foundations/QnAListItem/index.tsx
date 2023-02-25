import Image from 'next/image';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { User } from '../../../types/model/user';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  question: Omit<Question, 'password' | 'contents'>;
}

export const QnAListItem = ({ mode, question, size = 'medium' }: Props) => {
  // question_id,
  const { title, user, secret_mode, created_at, answer_count } = question;
  const { nickname } = user as Pick<User, 'nickname' | 'user_id'>;
  return (
    <Container size={size} mode={mode}>
      <TitleBox>
        <IconBox>
          {Boolean(secret_mode) && <Image alt="잠금버튼" src="./icon/lock.svg" width={10} height={10}></Image>}
        </IconBox>
        <Title>{title}</Title>
        <IconBox>({answer_count})</IconBox>
      </TitleBox>
      <InfoBox>
        <InfoItem>{nickname}</InfoItem>
        <InfoItem>{created_at && new Date(created_at).toLocaleDateString()}</InfoItem>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'question'>>`
  width: ${({ theme, size }) => size && theme.size.width[size]};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  height: 5.4rem;
  /* border-top: 0.1rem solid black; */
  border-bottom: 0.1rem solid
    ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  padding: 0.8rem 0;
`;

const TitleBox = styled.div`
  display: flex;
  height: 2rem;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
`;
const Title = styled.div`
  text-align: left;
  width: 100%;
  word-break: break-all;
`;

const IconBox = styled.div`
  width: auto;
  height: 1rem;
  width: 1rem;
  margin-right: 0.8rem;
`;

const InfoBox = styled.div`
  margin-top: 0.8rem;
  display: flex;

  justify-content: space-between;
`;

const InfoItem = styled.div``;
