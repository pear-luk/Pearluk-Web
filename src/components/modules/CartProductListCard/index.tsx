import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { CartListItem } from '../../foundations/CartListItem';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  cartProductList: CartProductListGetResponseDTO;
}

export const CartProductListCard = ({ mode, size = 'medium', cartProductList }: Props) => {
  return (
    <Container mode={mode} size={size}>
      {cartProductList.map((product, i) => {
        return (
          <ProductBox mode={mode} key={product.cart_product_id}>
            <CartListItem mode={mode} size={size} product={product} />
          </ProductBox>
        );
      })}
    </Container>
  );
};
const Container = styled.div<Omit<Props, 'cartProductList'>>`
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ theme, size }) => size && theme.size.width[size]};
`;

const ProductBox = styled.div<{ mode: ModeType }>`
  padding: 1.6rem 0;
  border-bottom: 1px solid
    ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
