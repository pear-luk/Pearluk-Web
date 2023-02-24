import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { Answer } from '../../../types/model/answer';
import { Text } from '../../elements/Text';

interface Props {
  mode: ModeType;
  answer: Answer;
}

export const AnswerCard = ({ mode, answer }: Props) => {
  return (
    <>
      <AnswerBox>
        <UserInfoBox>Writer. PEARLUK</UserInfoBox>

        <UserInfoBox>DATE. {new Date(answer.created_at as string).toLocaleDateString('ko-KR')}</UserInfoBox>

        <Splide aria-label="My Favorite Images" options={{ arrows: false, perMove: 1, type: 'loop' }}>
          {answer.imgs?.map((img) => (
            <SplideSlide key={img.answer_img_id}>
              <Image
                alt={`상품 이미지`}
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

        <Box>
          <Text mode={mode} contents={answer.contents} />
        </Box>
      </AnswerBox>
    </>
  );
};
const Box = styled.div`
  margin-top: 1.6rem;
`;

const UserInfoBox = styled.div`
  margin: 0.8rem 0;
`;

const AnswerBox = styled.div`
  margin: 4.8rem 0;
`;
