import Image from 'next/image';
import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
interface Props {
  mode: ModeType;
  orderId: string;
  productName: string;
  productsCount: number;
  price: number;
  oderStatus: string;
  mainProductImg: string;
}
export const OrderItem = ({ mode, orderId, productName, productsCount, price, oderStatus, mainProductImg }: Props) => {
  return (
    <Container>
      <ImgBox>
        <Image
          alt="상품 메인이미지"
          src={mainProductImg}
          fill
          style={{ objectFit: 'contain' }}
          sizes="auto 100%"></Image>
      </ImgBox>
      <InfoBox>
        <ProductName>{productName}</ProductName>
        <Info>
          <p>{productsCount}개</p>
          <p>KRW {price.toLocaleString()}</p>
          <p>{oderStatus}</p>
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
