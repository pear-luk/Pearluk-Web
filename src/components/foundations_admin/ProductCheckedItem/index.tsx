import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
import { CheckBox } from '../../elements/CheckBox';

interface Props {
  mode: ModeType;
  product: Product;

  size?: keyof Size['width'];

  mutate?: (updatequantity: number) => void;
  onCancle?: () => void;
  checked?: boolean;
  checkedProductList?: Product[];
  setCheckedProductList?: Dispatch<SetStateAction<Product[]>>;
  checkBox_onChange?: (() => void) | ((e: ChangeEvent<Element>) => void);
}
export const ProductCheckedItem = ({
  mode = 'white',

  product,
  size = 'xlarge',

  checkBox_onChange,
  checkedProductList,
}: Props) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    checkedProductList &&
      setCheck(Boolean(checkedProductList.find((checkProduct) => checkProduct.product_id === product.product_id)));
    console.log;
  }, [checkedProductList, product.product_id]);

  return (
    <Container mode={mode} size={size}>
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

          <div>
            <P>archive /child category</P>
            <P>
              {product.archive?.title} / {product.category?.name}
            </P>
          </div>
        </TopBox>
        <BottomBox>
          <InfoLeft>
            <QuantityBox>재고: {product.quantity} 개 </QuantityBox>
          </InfoLeft>
          <InfoRight>
            <P></P>
            <P>{Number(product.price).toLocaleString()} KRW</P>
          </InfoRight>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const P = styled.p`
  min-width: 1rem;
  margin-top: 0.4rem;
  font-size: 1rem;
`;
