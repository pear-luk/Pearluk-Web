import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderCustomerInfo, OrderRecipientInfo } from '../../../types/model/order';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { MyInfoGetResponseDTO } from '../../../types/response/my';
import { Button } from '../../elements/Button';
import { CheckBox } from '../../elements/CheckBox';
import { Header } from '../../foundations/Header';
import { PriceLabel } from '../../foundations/PriceLabel';

import { LayOut } from '../../layout';
import { CustomerInfoCard } from '../../modules/CustomerInfoCard';
import { OrderFormListCard } from '../../modules/OrderFormListCard';
import { RecipientInfoCard } from '../../modules/RecipientInfoCard';
interface Props {
  mode: ModeType;
  cartProductList: CartProductListGetResponseDTO;
  user?: MyInfoGetResponseDTO;
}

export const OrderFormTemplate = ({ mode, cartProductList, user }: Props) => {
  const [productList, setProductList] = useState<CartProductListGetResponseDTO>([]);
  const [customerInfo, setCustomerInfo] = useState<Omit<OrderCustomerInfo, 'order_id'>>({
    name: '',
    phone_number: '',
  });
  const [recipientInfo, setRecipientInfo] = useState<Omit<OrderRecipientInfo, 'order_id'>>({
    name: '',
    phone_number: '',
    post_code: '',
    full_address: '',
    address: '',
    detail_address: '',
  });
  /**
   * 포인트 추후 적용예정
   */
  const [price, setPrice] = useState(0);
  const [shippingFee] = useState(3500);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [point, setPoint] = useState(0);
  useEffect(() => {
    setProductList(cartProductList);
  }, [cartProductList]);

  useEffect(() => {
    user && setCustomerInfo({ name: user.nickname, phone_number: user.phone_number || '' });
  }, [user]);

  useMemo(() => {
    if (cartProductList.length > 0) {
      setPrice(cartProductList?.map((a) => Number(a?.product.price) * a?.count || 0)?.reduce((a, b) => a + b));
    }
  }, [cartProductList]);

  useEffect(() => {
    setTotalPrice(price + shippingFee);
  }, [price, shippingFee]);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="ORDER" />
      <OrderFormListCard mode={mode} cartProductList={productList} />
      <Box>
        <CustomerInfoCard mode={mode} customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} />
      </Box>
      <Box>
        <RecipientInfoCard mode={mode} recipientInfo={recipientInfo} setRecipientInfo={setRecipientInfo} />
      </Box>
      <Box>
        <Header mode={mode} label="TOTAL" />
        <Box>
          <PriceLabel mode={mode} label="PRODUCT" price={price} />
        </Box>
        <Box>
          <PriceLabel mode={mode} label="SHIPPING FEE" price={shippingFee} sign="+" />
        </Box>
        <BoxLarge>
          <PriceLabel mode={mode} label="TOTALL" price={totalPrice} />
        </BoxLarge>
      </Box>
      <Line />
      <Box>
        <CheckBox mode={mode} label="구매조건 확인 및 결제진행에 동의" />
      </Box>
      <BoxLarge>
        <Button color={mode === 'dark' ? 'yellow' : 'black'} size="huge" label="BUY" />
      </BoxLarge>
    </LayOut>
  );
};

const Box = styled.div`
  margin-top: 0.8rem;
`;

const BoxLarge = styled.div`
  margin-top: 2.4rem;
`;

const Line = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;

  width: 100%;
  height: 1px;
  border-bottom: 1px solid black;
`;
