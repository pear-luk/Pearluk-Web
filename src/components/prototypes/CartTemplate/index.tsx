import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDeleteCart, useDeleteCartProduct, useUpdateCartProduct } from '../../../hooks/mutation/cart';
import { useModal } from '../../../hooks/util/useModal';
import { ModeType } from '../../../types/common/propsTypes';
import { CartProduct } from '../../../types/model/cart';
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
  const [productList, setProductList] = useState<CartProductListGetResponseDTO>([]);

  const { mutate: updateCartProduct } = useUpdateCartProduct();
  const { mutate: deleteCartProduct } = useDeleteCartProduct();
  const { mutate: deleteCart } = useDeleteCart();

  const buttonHandler = useCallback(
    ({ cart_product_id }: Pick<CartProduct, 'cart_product_id'>) => ({
      updateCartProduct: (updateCount: number) => {
        updateCartProduct({ cart_product_id, count: updateCount });
      },
      deleteCartProduct: () => {
        deleteCartProduct({ cart_product_id });
      },
    }),
    [updateCartProduct, deleteCartProduct],
  );
  const deleteModalOkHandler = () => {
    setProductList([]);
    closeDeleteModal();
    deleteCart();
  };
  const {
    Modal: DeleteModal,
    open: openDeleteModal,
    close: closeDeleteModal,
  } = useModal({
    message: 'REAL DELETE?',
    mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: deleteModalOkHandler,
  });
  useEffect(() => {
    setProductList(cartProductList);
  }, [cartProductList]);
  return (
    <LayOut mode={mode}>
      <Header mode={mode} label="CART" chechBox={true} />
      <CartProductListCard
        mode={mode}
        cartProductList={productList}
        buttonHandler={buttonHandler}
        setProductList={setProductList}
      />

      <ButtonBox>
        <Button size="xxlarge" label="BUY" />
        <DeleteButton onClick={openDeleteModal}>DELETE</DeleteButton>
      </ButtonBox>
      <DeleteModal />
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
