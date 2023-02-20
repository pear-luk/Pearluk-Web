import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderProductRequestDTO } from '../../../types/request/order';
import { OrderFormListItem } from '../../foundations/OrderFormListItem';
import { PriceLabel } from '../../foundations/PriceLabel';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  productList: OrderProductRequestDTO[];
}

export const OrderFormListCard = ({ mode, size = 'medium', productList }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useMemo(() => {
    if (productList.length > 0) {
      setTotalPrice(productList?.map((a) => Number(a?.product.price) * a?.count || 0)?.reduce((a, b) => a + b));
    }
  }, [productList]);
  return (
    <Container mode={mode} size={size}>
      {productList.map((product) => {
        const { product_id } = product;
        return (
          <ProductBox mode={mode} key={product_id}>
            <OrderFormListItem mode={mode} size={size} product={product} />
          </ProductBox>
        );
      })}
      {productList.length > 0 && (
        <PriceBox>
          <PriceLabel font_size="primary" font_weight="bold" price_weight="bold" mode={mode} price={totalPrice} />
        </PriceBox>
      )}
    </Container>
  );
};
const Container = styled.div<Omit<Props, 'productList' | 'mutate'>>`
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ theme, size }) => size && theme.size.width[size]};
`;
const PriceBox = styled.div`
  margin-top: 0.8rem;
`;
const ProductBox = styled.div<{ mode: ModeType }>`
  padding: 1.6rem 0;
  border-bottom: 1px solid
    ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
