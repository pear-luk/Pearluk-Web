import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useModal } from '../../../hooks/util/useModal';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { Button } from '../../elements/Button';
import { CheckBox } from '../../elements/CheckBox';

interface Props {
  mode: ModeType;
  product: Product;

  size?: keyof Size['width'];

  mutate?: (updatequantity: number) => void;
  onCancle?: () => void;
  checked?: boolean;
  checkProductList?: CartProductListGetResponseDTO;
  checkBox_onChange?: (() => void) | ((e: ChangeEvent<Element>) => void);
}
export const ProductListItem_Admin = ({
  mode = 'white',

  product,
  size = 'xlarge',

  mutate,
  onCancle,
  checkBox_onChange,
  checkProductList,
}: Props) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [check, setCheck] = useState(false);
  const minusButtonHandler = () => {
    mutate && mutate(quantity - 1);
    setQuantity(quantity - 1);
  };
  const plusButtonHandler = () => {
    mutate && mutate(quantity + 1);
    setQuantity(quantity + 1);
  };
  useEffect(() => {
    checkProductList &&
      setCheck(Boolean(checkProductList.find((checkProduct) => checkProduct.product_id === product.product_id)));
    console.log;
  }, [checkProductList, product.product_id]);
  const cancleModalOkHandler = () => {
    closeCancleModal();
    onCancle && onCancle();
  };
  const {
    Modal: CancleModal,
    open: openCancleModal,
    close: closeCancleModal,
  } = useModal({
    message: 'REAL DELETE?',
    mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: cancleModalOkHandler,
  });

  return (
    <Container mode={mode} size={size}>
      <CancleModal />
      <CheckBox mode={mode} onChange={checkBox_onChange} checked={check ? true : false} />
      <ImgBox>
        <Image
          alt="상품 메인이미지"
          src={product && product.imgs && product.imgs.length > 0 ? product.imgs[0].url : '/logo/logo.svg'}
          fill
          style={{ objectFit: 'contain' }}
          sizes="auto 100%"></Image>
      </ImgBox>
      <InfoBox>
        <TopBox>
          <ProductName>{product.name}</ProductName>

          <P>
            {product.archive?.title} / {product.category?.name}
          </P>
          <Button label="↑" size="mini" />
        </TopBox>
        <BottomBox>
          <InfoLeft>
            <QuantityBox>
              {quantity === 0 ? (
                <Button size={'mini'} color={mode === 'white' ? 'grey' : 'dark_yellow'} label="-" />
              ) : (
                <Button
                  size={'mini'}
                  color={mode === 'white' ? 'black' : 'yellow'}
                  onClick={minusButtonHandler}
                  label="-"
                />
              )}
              {quantity}
              <Button size="mini" color={mode === 'white' ? 'black' : 'yellow'} onClick={plusButtonHandler} label="+" />
            </QuantityBox>
          </InfoLeft>
          <InfoRight>
            <P></P>
            <P>{Number(product.price).toLocaleString()} KRW</P>
          </InfoRight>
          <Button label="EDIT" />
          <Button label="↓" size="mini" />
        </BottomBox>
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

const BottomBox = styled.div`
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
const QuantityBox = styled.div`
  width: 7.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  min-width: 1rem;
  margin-top: 0.4rem;
`;
