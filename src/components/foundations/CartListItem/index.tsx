import Image from 'next/image';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { CartProduct } from '../../../types/model/cart';
import { Button } from '../../elements/Button';
import { CheckBox } from '../../elements/CheckBox';

interface Props {
  mode: ModeType;
  product: CartProduct;

  size?: keyof Size['width'];

  plus_onClick?: () => void;
  minus_onClick?: () => void;
  onCancle?: () => void;
}
export const CartListItem = ({
  mode,

  product,
  size = 'medium',
  plus_onClick,
  minus_onClick,
  onCancle,
}: Props) => {
  return (
    <Container mode={mode} size={size}>
      <CheckBox mode={mode} />
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

          <CancleButton onClick={onCancle}>X</CancleButton>
        </TopBox>
        <Info>
          <InfoLeft>
            <CountBox>
              {product.count === 1 ? (
                <Button size={'mini'} color={mode === 'white' ? 'grey' : 'dark_yellow'} label="-" />
              ) : (
                <Button size={'mini'} color={mode === 'white' ? 'black' : 'yellow'} onClick={minus_onClick} label="-" />
              )}
              {product.count}
              <Button size="mini" color={mode === 'white' ? 'black' : 'yellow'} onClick={plus_onClick} label="+" />
            </CountBox>
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

const CancleButton = styled.div<{ button_size?: keyof Size['font'] }>`
  cursor: pointer;
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
