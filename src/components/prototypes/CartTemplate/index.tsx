import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useDeleteCart, useDeleteCartProduct, useUpdateCartProduct } from '../../../hooks/mutation/cart';
import { useModal } from '../../../hooks/util/useModal';
import { orderProductState } from '../../../recoil/order/state';
import { ModeType } from '../../../types/common/propsTypes';
import { CartProduct } from '../../../types/model/cart';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { Button } from '../../elements/Button';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../layout/layout';
import { CartProductListCard } from '../../modules/CartProductListCard';

interface Props {
  mode: ModeType;
  cartProductList: CartProductListGetResponseDTO;
}

export const CartTemplate = ({ mode = 'white', cartProductList }: Props) => {
  const router = useRouter();
  const [productList, setProductList] = useState<CartProductListGetResponseDTO>([]);
  const [checkProductList, setCheckProductList] = useState<CartProductListGetResponseDTO>([]);

  const setOrderProduct = useSetRecoilState(orderProductState);
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
    setProductList(productList.filter((product) => !checkProductList.includes(product)));
    closeDeleteModal();
    deleteCart({ product_list: checkProductList });
    setCheckProductList([]);
  };

  const {
    Modal: DeleteModal,
    open: openDeleteModal,
    close: closeDeleteModal,
  } = useModal({
    message: 'REAL DELETE THE SELECTION?',
    mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: deleteModalOkHandler,
  });

  const allCheckBoxHandler = (e: React.ChangeEvent<Element>) => {
    const { target } = e;
    const { checked } = target as HTMLInputElement;
    if (checked) return setCheckProductList(productList);

    return setCheckProductList([]);
  };
  const buyButtonHandler = () => {
    if (checkProductList.length > 0) {
      setOrderProduct(checkProductList);
      router.push('/orders/form');
    }
  };
  useEffect(() => {
    setProductList(cartProductList);
  }, [cartProductList]);

  return (
    <LayOut mode={mode}>
      <Header
        mode={mode}
        label="CART"
        chechBox={true}
        checkBox_onChange={allCheckBoxHandler}
        checkBox_checked={checkProductList.length > 0 && productList.length === checkProductList.length}
      />
      <CartProductListCard
        mode={mode}
        cartProductList={productList}
        buttonHandler={buttonHandler}
        setProductList={setProductList}
        checkProductList={checkProductList}
        setCheckProductList={setCheckProductList}
      />

      <ButtonBox>
        <Button size="xxlarge" label="BUY" onClick={buyButtonHandler} />
        <DeleteButton onClick={checkProductList.length > 0 ? openDeleteModal : undefined}>DELETE</DeleteButton>
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
