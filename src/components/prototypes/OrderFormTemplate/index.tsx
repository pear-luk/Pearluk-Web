import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useCreateOrder } from '../../../hooks/mutation/order';
import { useModal } from '../../../hooks/util/useModal';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderCustomerInfo, OrderRecipientInfo } from '../../../types/model/order';
import { OrderProductRequestDTO } from '../../../types/request/order';
import { CartProductListGetResponseDTO } from '../../../types/response/cart';
import { MyInfoGetResponseDTO } from '../../../types/response/my';
import { Button } from '../../elements/Button';
import { CheckBox } from '../../elements/CheckBox';
import { Header } from '../../foundations/Header';
import { PriceLabel } from '../../foundations/PriceLabel';

import { CustomerInfoCard } from '../../modules/CustomerInfoCard';
import { OrderFormListCard } from '../../modules/OrderFormListCard';
import { RecipientInfoCard } from '../../modules/RecipientInfoCard';
import { LayOut } from '../../_layout/layout';
interface Props {
  mode: ModeType;
  cartProductList: CartProductListGetResponseDTO;
  user?: MyInfoGetResponseDTO;
}

export const OrderFormTemplate = ({ mode, cartProductList, user }: Props) => {
  const router = useRouter();
  const tossClientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
  const tossSuccessUrl = process.env.NEXT_PUBLIC_TOSS_SUCCESS_URL;
  const tossFailUrl = process.env.NEXT_PUBLIC_TOSS_FAIL_URL;
  const [orderName, orderNameSet] = useState('');
  const [agree, setAgree] = useState(false);
  const [productList, setProductList] = useState<OrderProductRequestDTO[]>([]);
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
  const [essential, setEssential] = useState(false);

  const { mutateAsync: createOrder } = useCreateOrder();

  /**
   * 포인트 추후 적용예정
   */
  const [price, setPrice] = useState(0);
  const [shippingFee] = useState(3500);
  const [totalPrice, setTotalPrice] = useState(0);
  const { Modal: EssentialModal, open } = useModal({
    message: `구매조건 화인 및 결제진행에 동의
해주세요`,
    mode,
    OK_Button: true,
    NO_Button: false,
  });
  // const [point, setPoint] = useState(0);
  const buyButtonOnclick = async () => {
    if (essential) {
      const res = await createOrder({
        name: orderName,
        total_price: totalPrice,
        payment_status: 0,
        order_status: 0,
        order_products: productList,
        recipient_info: recipientInfo,
        customer_info: customerInfo,
      });
      if (res.result) {
        const { result } = res;
        const { order_id } = result;
        if (tossClientKey && tossSuccessUrl && tossFailUrl) {
          const tossPayments = await loadTossPayments(tossClientKey);
          tossPayments.requestPayment({
            amount: totalPrice,
            orderId: order_id,
            orderName: orderName,
            customerName: customerInfo.name,
            successUrl: tossSuccessUrl,
            failUrl: tossFailUrl,
          });
          //성공할시 장바구니 비워줘야함.
          // .then(() => router.push('/order/success'));
        }
      }
    } else open();
  };
  useEffect(() => {
    if (cartProductList.length === 0) {
      router.push('/cart');
    }

    setProductList(
      cartProductList.map((cartProduct) => {
        const { product_id, count, product } = cartProduct;
        const { price } = product;
        return {
          product_id,
          count,
          price,
          product,
        };
      }),
    );
  }, [cartProductList, router]);

  useEffect(() => {
    user && setCustomerInfo({ name: user.nickname, phone_number: user.phone_number || '' });
  }, [user]);

  useMemo(() => {
    if (cartProductList.length > 0) {
      setPrice(cartProductList?.map((a) => Number(a?.product.price) * a?.count || 0)?.reduce((a, b) => a + b));
      const count = cartProductList.map((a) => a.count).reduce((a, b) => a + b);
      orderNameSet(
        `${cartProductList[0].product.name} ${cartProductList[0].count}개 ${
          count - cartProductList[0].count > 0 ? `외 ${count - cartProductList[0].count}개` : ''
        }`,
      );
    }
  }, [cartProductList]);

  useEffect(() => {
    setTotalPrice(price + shippingFee);
  }, [price, shippingFee]);

  useEffect(() => {
    console.log(orderName);
  }, [orderName]);

  // 정규식필요  추가 예정.
  useEffect(() => {
    productList.length > 0 &&
    orderName.length > 0 &&
    Object.values(recipientInfo).filter((a) => a.length === 0).length === 0 &&
    Object.values(customerInfo).filter((a) => a.length === 0).length === 0 &&
    agree
      ? setEssential(true)
      : setEssential(false);
  }, [customerInfo, recipientInfo, orderName.length, productList.length, agree]);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="ORDER" />
      <OrderFormListCard mode={mode} productList={productList} />
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
          <PriceLabel mode={mode} label="TOTAL" price={totalPrice} />
        </BoxLarge>
      </Box>
      <Line />
      <Box>
        <CheckBox
          mode={mode}
          label="구매조건 확인 및 결제진행에 동의"
          checked={agree ? true : false}
          onChange={() => setAgree(!agree)}
        />
      </Box>
      <BoxLarge>
        <Button color={mode === 'dark' ? 'yellow' : 'black'} size="huge" label="BUY" onClick={buyButtonOnclick} />
      </BoxLarge>
      <EssentialModal />
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
