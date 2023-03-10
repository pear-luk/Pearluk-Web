import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { H1 } from '../../elements/H1';
import { Text } from '../../elements/Text';

interface Props {
  mode: ModeType;
  question: Question;
  size?: keyof Size['width'];
}

export const QuestionCard = ({ mode, question, size = 'medium' }: Props) => {
  useEffect(() => {
    console.log(question.imgs);
  }, [question.imgs]);
  return (
    <Container mode={mode} size={size}>
      <Box>
        <H1 mode={mode} contents={question.title} />
      </Box>
      <UserInfoBox>Writer. {question.user?.nickname}</UserInfoBox>
      <UserInfoBox>DATE. {new Date(question.created_at as string).toLocaleDateString('ko-KR')}</UserInfoBox>
      <Box>
        <Splide aria-label="My Favorite Images" options={{ arrows: false, perMove: 1, type: 'loop' }}>
          {question &&
            question.imgs?.map((img, i) => (
              <SplideSlide key={img.question_img_id}>
                <Image
                  // key={img.question_img_id}
                  alt={`질문 이미지 ${i}`}
                  placeholder="blur"
                  src={img.url}
                  blurDataURL="/logo/logo.svg"
                  width={294}
                  height={294}
                  style={{ objectFit: 'contain', width: '100%', height: 'fit-content' }}
                />
              </SplideSlide>
            ))}
        </Splide>
      </Box>
      <Box>
        <Text mode={mode} contents={question.contents} />
      </Box>
    </Container>
  );
};
const Box = styled.div`
  margin-top: 1.6rem;
`;

const UserInfoBox = styled.div`
  margin: 0.8rem 0;
`;
const Container = styled.div<Omit<Props, 'question'>>`
  /* margin: 4.8rem 0; */
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ theme, size }) => size && theme.size.width[size]};
`;
