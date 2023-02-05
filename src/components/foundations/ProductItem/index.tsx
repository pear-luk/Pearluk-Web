import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
interface Props {
  mode: ModeType;
  product_id: string;
  product_name: string;
  price: number;
  images: string[];

  slide?: boolean;
}
export const ProductItem = ({ mode, price, product_id, product_name, images, slide = false }: Props) => {
  return (
    <Container mode={mode}>
      <ImageBox>
        {slide ? (
          <Splide aria-label="My Favorite Images" options={{ arrows: false, perMove: 1, type: 'loop' }}>
            {images.map((img, i) => {
              return (
                <SplideSlide key={i}>
                  <Image
                    alt={`상품 이미지${i}`}
                    placeholder="blur"
                    src={img}
                    blurDataURL="/logo/logo.svg"
                    width={342}
                    height={456}></Image>
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          <ImageBox>
            <Image
              alt="상품 대표 이미지"
              placeholder="blur"
              src={images[0]}
              blurDataURL="/logo/logo.svg"
              width={342}
              height={456}

              // fill
              // style={{ objectFit: 'contain' }}
            ></Image>
          </ImageBox>
        )}
      </ImageBox>

      <InfoBox>
        <NameBox>PRODUCT NAME PRODUCT NAME PRODUCT NAME PRODUCT NAME</NameBox>
        <PriceBox>
          <Price>{price.toLocaleString()} KRW</Price>
        </PriceBox>
      </InfoBox>
    </Container>
  );
};
const ImageBox = styled.div`
  position: relative;
  height: 45.6rem;
`;
const Container = styled.div<{ mode: ModeType }>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  margin-top: 2.4rem;
  width: 34.2rem;

  ${ImageBox} {
    /* border: 1px solid ${({ mode, theme }) =>
      mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black}; */
  }
  img {
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NameBox = styled.div`
  font-size: 1.4rem;
  width: 23rem;
  word-break: break-all;
`;

const PriceBox = styled.div`
  font-size: 1.4rem;
`;

const Price = styled.div``;

const Sale = styled.div``;
