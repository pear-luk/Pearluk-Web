import Image from 'next/image';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderProduct, Shipping } from '../../../types/model/order';

interface Props {
  mode: ModeType;
  product: OrderProduct;

  size?: keyof Size['width'];

  order_status: string;
  shipping?: Shipping;
}
export const OrderListItem = ({
  mode,

  order_status,
  product,
  shipping,
  size = 'medium',
}: Props) => {
  return (
    <Container mode={mode} size={size}>
      <ImgBox>
        <Image
          alt="상품 메인이미지"
          src={product.product.imgs[0]}
          fill
          style={{ objectFit: 'contain' }}
          sizes="auto 100%"></Image>
      </ImgBox>
      <InfoBox>
        <ProductName>{product.product.name}</ProductName>
        <Info>
          <InfoLeft>
            <P>KRW {product.price.toLocaleString()}</P>
            <P>
              {shipping && shipping.courier_name && shipping.waybill_number
                ? `${shipping.courier_name} ${shipping.waybill_number}`
                : `운송장 정보없음`}
            </P>
          </InfoLeft>
          <InfoRight>
            <P>{product && product.count}개</P>
            <P>{order_status}</P>
          </InfoRight>
        </Info>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div<{ mode: ModeType; size: keyof Size['width'] }>`
  position: relative;
  width: ${({ theme, size }) => size && theme.size.width[size]};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  display: flex;
  justify-content: left;
`;

const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background-color: black;
  position: relative;
  margin-right: 0.4rem;
  flex: 1 0 auto;
`;

const InfoBox = styled.div`
  height: 5.6rem;
  width: 100%;
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
  display: flex;
  justify-content: space-between;
`;
const InfoRight = styled.div`
  text-align: right;
`;
const InfoLeft = styled.div``;

const P = styled.p`
  margin-top: 0.4rem;
`;
