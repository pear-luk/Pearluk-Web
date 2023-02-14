import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { OrderRecipientInfo } from '../../../types/model/order';
import { UserAddress } from '../../../types/model/user';

import { Header } from '../../foundations/Header';
import { InputAddress } from '../../foundations/InputAddress';

import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';

interface Props {
  mode: ModeType;
  recipientInfo: Omit<OrderRecipientInfo, 'order_id'>;
  setRecipientInfo?: Dispatch<SetStateAction<Omit<OrderRecipientInfo, 'order_id'>>>;
}

export const RecipientInfoCard = ({ mode, recipientInfo, setRecipientInfo }: Props) => {
  const [phone, setPhone] = useState<string>(recipientInfo?.phone_number ? recipientInfo.phone_number : '');
  const [address, setAddress] = useState<Partial<UserAddress>>({});

  const nameHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setRecipientInfo) setRecipientInfo({ ...recipientInfo, name: e.target.value });
    },
    [recipientInfo, setRecipientInfo],
  );

  useEffect(() => {
    if (setRecipientInfo)
      setRecipientInfo((recipientInfo) => ({ ...(recipientInfo as OrderRecipientInfo), phone_number: phone }));
  }, [phone, setRecipientInfo]);

  useEffect(() => {
    if (setRecipientInfo)
      setRecipientInfo((recipientInfo) => ({
        ...(recipientInfo as OrderRecipientInfo),
        ...(address as UserAddress),
      }));
  }, [address, setRecipientInfo]);

  return (
    <Container>
      <Header label="SHIPPING" mode={mode} label_size="medium" />
      <Box>
        <InputLabel mode={mode} value={recipientInfo?.name || undefined} onChange={nameHandler} label="NAME" />
      </Box>
      <Box>
        <InputPhone mode={mode} value={phone} setPhoneNumber={setPhone} label="PHONE"></InputPhone>
      </Box>
      <Box>
        <InputAddress mode={mode} addressInfo={address} setAddressInfo={setAddress}></InputAddress>
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
