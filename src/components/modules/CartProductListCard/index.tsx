import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { UpdateCartProductDTO } from '../../../types/request/cart';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { CartListItem } from '../../foundations/CartListItem';
import { PriceLabel } from '../../foundations/PriceLabel';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  cartProductList: CartProductListGetResponseDTO;

  buttonHandler?: ({ cart_product_id }: Pick<UpdateCartProductDTO, 'cart_product_id'>) => {
    updateCartProduct: (updateCount: number) => void;
    deleteCartProduct: () => void;
  };
}

export const CartProductListCard = ({ mode, size = 'medium', cartProductList, buttonHandler }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const [productList, setProductList] = useState<CartProductListGetResponseDTO>([]);
  const deleteButtonHandler = (cart_product_id: string) => () => {
    setProductList(productList.filter((product) => product.cart_product_id !== cart_product_id));
    buttonHandler && buttonHandler({ cart_product_id }).deleteCartProduct();
  };
  useEffect(() => {
    setProductList(cartProductList);
  }, [cartProductList]);
  useMemo(() => {
    if (productList.length > 0) {
      setTotalPrice(productList?.map((a) => Number(a?.product.price) * a?.count || 0)?.reduce((a, b) => a + b));
    }
  }, [productList]);
  return (
    <Container mode={mode} size={size}>
      {productList.map((product) => {
        const { cart_product_id, count } = product;
        return (
          <ProductBox mode={mode} key={product.cart_product_id}>
            <CartListItem
              mode={mode}
              size={size}
              product={product}
              onCancle={deleteButtonHandler(cart_product_id)}
              mutate={buttonHandler && buttonHandler({ cart_product_id }).updateCartProduct}
            />
          </ProductBox>
        );
      })}
      {productList.length > 0 && (
        <PriceBox>
          <PriceLabel
            font_size="primary"
            font_weight="bold"
            price_weight="bold"
            mode={mode}
            label="TOTAL"
            price={totalPrice}
          />
        </PriceBox>
      )}
    </Container>
  );
};
const Container = styled.div<Omit<Props, 'cartProductList' | 'mutate'>>`
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
