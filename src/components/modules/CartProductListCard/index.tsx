import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { UpdateCartProductDTO } from '../../../types/request/cart';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { CartListItem } from '../../foundations/CartListItem';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  cartProductList: CartProductListGetResponseDTO;

  buttonHandler?: ({ cart_product_id, count }: UpdateCartProductDTO) => {
    plus: () => void;
    minus: () => void;
  };
}

export const CartProductListCard = ({ mode, size = 'medium', cartProductList, buttonHandler }: Props) => {
  return (
    <Container mode={mode} size={size}>
      {cartProductList.map((product) => {
        const { cart_product_id, count } = product;
        return (
          <ProductBox mode={mode} key={product.cart_product_id}>
            <CartListItem
              mode={mode}
              size={size}
              product={product}
              plus_onClick={buttonHandler && buttonHandler({ cart_product_id, count }).plus}
              minus_onClick={buttonHandler && buttonHandler({ cart_product_id, count }).minus}
            />
          </ProductBox>
        );
      })}
    </Container>
  );
};
const Container = styled.div<Omit<Props, 'cartProductList' | 'mutate'>>`
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ theme, size }) => size && theme.size.width[size]};
`;

const ProductBox = styled.div<{ mode: ModeType }>`
  padding: 1.6rem 0;
  border-bottom: 1px solid
    ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
