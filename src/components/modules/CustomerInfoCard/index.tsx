import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderCustomerInfo } from '../../../types/model/order';
import { Header } from '../../foundations/Header';

import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';

interface Props {
  mode: ModeType;
  customerInfo: Omit<OrderCustomerInfo, 'order_id'>;
  setCustomerInfo?: Dispatch<SetStateAction<Omit<OrderCustomerInfo, 'order_id'>>>;
}

export const CustomerInfoCard = ({ mode, customerInfo, setCustomerInfo }: Props) => {
  const [phone, setPhone] = useState<string>(customerInfo?.phone_number ? customerInfo.phone_number : '');

  const nameHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setCustomerInfo) setCustomerInfo({ ...customerInfo, name: e.target.value });
    },
    [customerInfo, setCustomerInfo],
  );

  // const phoneHandler = useCallback(() => {
  //   setUser({ ...user, email: phone });
  // }, [user, phone]);
  // const setAddress = () => {
  //   setUser({ ...user, email: phone });
  // };
  useEffect(() => {
    if (setCustomerInfo)
      setCustomerInfo((customerInfo) => ({ ...(customerInfo as OrderCustomerInfo), phone_number: phone }));
  }, [phone, setCustomerInfo]);

  return (
    <Container>
      <Header label="CUSTOMER" mode={mode} />
      <Box>
        <InputLabel mode={mode} value={customerInfo?.name || undefined} onChange={nameHandler} label="NAME" />
      </Box>
      <Box>
        <InputPhone mode={mode} value={phone} setPhoneNumber={setPhone} label="PHONE"></InputPhone>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 29.4rem;
`;
const Box = styled.div`
  margin: 0.8rem 0;
`;
