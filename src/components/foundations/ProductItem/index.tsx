import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
interface Props {
  mode: ModeType;

  product: Product;

  slide?: boolean;
}
export const ProductItem = ({ mode, product, slide = false }: Props) => {
  return (
    <Container mode={mode}>
      <ImageBox>
        {slide ? (
          <Splide aria-label="My Favorite Images" options={{ arrows: false, perMove: 1, type: 'loop' }}>
            {product?.imgs && product.imgs.length > 0 ? (
              product.imgs.map((img, i) => {
                return (
                  <SplideSlide key={i}>
                    <Image
                      alt={`${product.name} img ${i}`}
                      placeholder="blur"
                      src={img.url}
                      blurDataURL="/logo/logo.svg"
                      width={342}
                      height={456}></Image>
                  </SplideSlide>
                );
              })
            ) : (
              <SplideSlide>
                <Image
                  alt="상품 대표 이미지"
                  placeholder="blur"
                  src={product?.imgs && product.imgs.length > 0 ? product.imgs[0].url : '/logo/logo.svg'}
                  blurDataURL="/logo/logo.svg"
                  width={342}
                  height={456}

                  // fill
                  // style={{ objectFit: 'contain' }}
                ></Image>
              </SplideSlide>
            )}
          </Splide>
        ) : (
          <ImageBox>
            <Image
              alt="상품 대표 이미지"
              placeholder="blur"
              src={product?.imgs && product.imgs.length > 0 ? product.imgs[0].url : '/logo/logo.svg'}
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
        <NameBox>{product && product.name}</NameBox>
        <PriceBox>
          <Price>{product && product.price.toLocaleString()} KRW</Price>
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
  height: 2.8rem;
  margin-top: 0.4rem;
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

// const Sale = styled.div``;
