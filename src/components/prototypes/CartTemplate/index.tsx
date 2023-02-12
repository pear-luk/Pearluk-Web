import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useCartProductDelete, useCartProductUpdate } from '../../../hooks/mutation/cart';
import { ModeType } from '../../../types/common/propsTypes';
import { UpdateCartProductDTO } from '../../../types/request/cart';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { Button } from '../../elements/Button';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../layout';
import { CartProductListCard } from '../../modules/CartProductListCard';

interface Props {
  mode: ModeType;
  cartProductList: CartProductListGetResponseDTO;
}

export const CartTemplate = ({ mode = 'white', cartProductList }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  //총합계산

  const { mutate: updateCartProduct } = useCartProductUpdate();
  const { mutate: deleteCartProduct } = useCartProductDelete();
  const buttonHandler = useCallback(
    ({ cart_product_id }: UpdateCartProductDTO) => ({
      updateCartProduct: (updateCount: number) => {
        updateCartProduct({ cart_product_id, count: updateCount });
      },
      deleteCartProduct: () => {
        deleteCartProduct({ cart_product_id });
      },
    }),
    [updateCartProduct, deleteCartProduct],
  );
  return (
    <LayOut mode={mode}>
      <Header mode={mode} label="CART" chechBox={true} />
      <CartProductListCard mode={mode} cartProductList={cartProductList} buttonHandler={buttonHandler} />

      <ButtonBox>
        <Button size="xxlarge" label="BUY" />
        <DeleteButton>DELETE</DeleteButton>
      </ButtonBox>
    </LayOut>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  button {
    display: block;
  }
`;

const DeleteButton = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;
