import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { CartProduct } from '../../../types/model/cart';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { OrderFormListItem } from '../../foundations/OrderFormListItem';
import { PriceLabel } from '../../foundations/PriceLabel';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  cartProductList: CartProductListGetResponseDTO;
  setProductList?: Dispatch<SetStateAction<CartProductListGetResponseDTO>>;
  buttonHandler?: ({ cart_product_id }: Pick<CartProduct, 'cart_product_id'>) => {
    updateCartProduct: (updateCount: number) => void;
    deleteCartProduct: () => void;
  };
}

export const OrderFormListCard = ({ mode, size = 'medium', cartProductList, buttonHandler, setProductList }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteButtonHandler = (cart_product_id: string) => () => {
    setProductList && setProductList(cartProductList.filter((product) => product.cart_product_id !== cart_product_id));
    buttonHandler && buttonHandler({ cart_product_id }).deleteCartProduct();
  };

  useMemo(() => {
    if (cartProductList.length > 0) {
      setTotalPrice(cartProductList?.map((a) => Number(a?.product.price) * a?.count || 0)?.reduce((a, b) => a + b));
    }
  }, [cartProductList]);
  return (
    <Container mode={mode} size={size}>
      {cartProductList.map((product) => {
        const { cart_product_id } = product;
        return (
          <ProductBox mode={mode} key={product.cart_product_id}>
            <OrderFormListItem
              mode={mode}
              size={size}
              product={product}
              onCancle={deleteButtonHandler(cart_product_id)}
              mutate={buttonHandler && buttonHandler({ cart_product_id }).updateCartProduct}
            />
          </ProductBox>
        );
      })}
      {cartProductList.length > 0 && (
        <PriceBox>
          <PriceLabel font_size="primary" font_weight="bold" price_weight="bold" mode={mode} price={totalPrice} />
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
