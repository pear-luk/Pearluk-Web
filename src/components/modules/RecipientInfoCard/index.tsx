import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { UserAddress } from '../../../types/model/user';
import { MyInfoGetResponseDTO } from '../../../types/response/my';
import { Header } from '../../foundations/Header';
import { InputAddress } from '../../foundations/InputAddress';

import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';

interface Props {
  mode: ModeType;
  user: MyInfoGetResponseDTO;
  setUser?: Dispatch<SetStateAction<MyInfoGetResponseDTO | undefined>>;
}

export const RecipientInfoCard = ({ mode, user, setUser }: Props) => {
  const [phone, setPhone] = useState<string>(user?.phone_number ? user.phone_number : '');
  const [userAddress, setUserAddress] = useState<Partial<UserAddress>>(user?.address ? user.address : {});

  const nameHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setUser) setUser({ ...user, nickname: e.target.value });
    },
    [user, setUser],
  );

  // const phoneHandler = useCallback(() => {
  //   setUser({ ...user, email: phone });
  // }, [user, phone]);
  // const setAddress = () => {
  //   setUser({ ...user, email: phone });
  // };
  useEffect(() => {
    if (setUser) setUser((user) => ({ ...(user as MyInfoGetResponseDTO), phone_number: phone }));
  }, [phone, setUser]);
  useEffect(() => {
    if (setUser) setUser((user) => ({ ...(user as MyInfoGetResponseDTO), address: userAddress as UserAddress }));
  }, [userAddress, setUser]);

  return (
    <Container>
      <Header label="SHIPPING" mode={mode} label_size="medium" />
      <Box>
        <InputLabel mode={mode} value={user?.nickname || undefined} onChange={nameHandler} label="NAME" />
      </Box>
      <Box>
        <InputPhone mode={mode} value={phone} setPhoneNumber={setPhone} label="PHONE"></InputPhone>
      </Box>
      <Box>
        <InputAddress
          mode={mode}
          address={user?.address || undefined}
          userAddress={userAddress}
          setUserAddress={setUserAddress}></InputAddress>
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

