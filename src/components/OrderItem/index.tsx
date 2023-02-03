import { ModeType } from '@type/common/mode';
import Image from 'next/image';
import styled from 'styled-components';

export interface IProduct {
  product_id: string;
  name: string;
  price: number;
  imgs: string[];
  count: number;
}

interface Props {
  mode: ModeType;
  product: IProduct;
  order_id: string;

  orderStatus: string;
}
export const OrderItem = ({ mode, order_id, orderStatus, product }: Props) => {
  return (
    <Container>
      <ImgBox>
        <Image
          alt="상품 메인이미지"
          src={product.imgs[0]}
          fill
          style={{ objectFit: 'contain' }}
          sizes="auto 100%"></Image>
      </ImgBox>
      <InfoBox>
        <ProductName>{product.name}</ProductName>
        <Info>
          <p>{product.count}개</p>
          <p>KRW {product.price.toLocaleString()}</p>
          <p>{orderStatus}</p>
        </Info>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: left;
`;

const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background-color: black;
  position: relative;
  margin-right: 0.4rem;
`;

const InfoBox = styled.div`
  height: 5.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Info = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
