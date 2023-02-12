import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useCartUpdate } from '../../../hooks/mutation/cart';
import { ModeType } from '../../../types/common/propsTypes';
import { UpdateCartProductDTO } from '../../../types/request/cart';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { Button } from '../../elements/Button';
import { Header } from '../../foundations/Header';
import { PriceLabel } from '../../foundations/PriceLabel';
import { LayOut } from '../../layout';
import { CartProductListCard } from '../../modules/CartProductListCard';

interface Props {
  mode: ModeType;
  cartProductList: CartProductListGetResponseDTO;
}

export const CartTemplate = ({ mode = 'white', cartProductList }: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  //총합계산
  useMemo(() => {
    if (cartProductList.length > 0) {
      setTotalPrice(cartProductList?.map((a) => Number(a?.product.price) * a?.count || 0)?.reduce((a, b) => a + b));
    }
  }, [cartProductList]);

  const { mutate: mutateCartUpdate } = useCartUpdate();
  const buttonHandler = useCallback(
    ({ cart_product_id, count }: UpdateCartProductDTO) => ({
      plus: () => {
        mutateCartUpdate({ cart_product_id, count: count + 1 });
      },
      minus: () => {
        mutateCartUpdate({ cart_product_id, count: count - 1 });
      },
    }),
    [mutateCartUpdate],
  );
  return (
    <LayOut mode={mode}>
      <Header mode={mode} label="CART" chechBox={true} />
      <CartProductListCard mode={mode} cartProductList={cartProductList} buttonHandler={buttonHandler} />
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
const PriceBox = styled.div`
  margin-top: 0.8rem;
`;
const DeleteButton = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;
