import Image from 'next/image';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderProductRequestDTO } from '../../../types/request/order';
import { Button } from '../../elements/Button';

interface Props {
  mode: ModeType;
  product: OrderProductRequestDTO;

  size?: keyof Size['width'];

  mutate?: (updateCount: number) => void;
  onCancle?: () => void;
}
export const OrderFormListItem = ({
  mode,

  product,
  size = 'medium',
}: Props) => {
  return (
    <Container mode={mode} size={size}>
      <ImgBox>
        <Image
          alt="상품 메인이미지"
          src={product && product.product && product.product.imgs ? product.product.imgs[0] : '/logo/logo.svg'}
          fill
          style={{ objectFit: 'contain' }}
          sizes="auto 100%"></Image>
      </ImgBox>
      <InfoBox>
        <TopBox>
          <ProductName>{product.product.name}</ProductName>

          <ButtonBox>
            <Button color={mode === 'dark' ? 'yellow' : 'black'} size="small" label="COUPON" />
          </ButtonBox>
        </TopBox>
        <Info>
          <InfoLeft>
            <CountBox>{product.count} 개</CountBox>
          </InfoLeft>
          <InfoRight>
            <P></P>
            <P>{(Number(product.product.price) * product.count).toLocaleString()} KRW</P>
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
  label {
    margin-right: 0.4rem;
  }
`;

const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background-color: black;
  position: relative;
  margin-right: 0.4rem;
  flex: 1 0 auto;
`;
const TopBox = styled.div`
  max-height: 2.8rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div<{ button_size?: keyof Size['font'] }>`
  flex: 0 1;
`;

const InfoBox = styled.div`
  height: 5.6rem;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.4rem;
  overflow: hidden;
`;

const ProductName = styled.p`
  max-width: 16.7rem;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  word-break: break-all;
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
const InfoLeft = styled.div`
  display: flex;
  flex-direction: column-reverse;

  button {
    display: block;
  }
`;
const CountBox = styled.div`
  width: 7.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  min-width: 1rem;
  margin-top: 0.4rem;
`;
