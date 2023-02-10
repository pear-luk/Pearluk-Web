import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { UserAddress } from '../../../types/model/user';
import { MyInfoGetResponseDTO } from '../../../types/response/my';

import { Button } from '../../elements/Button';
import { InputAddress } from '../../foundations/InputAddress';
import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';

interface Props {
  mode: ModeType;
  user: MyInfoGetResponseDTO;
  setUser?: Dispatch<SetStateAction<MyInfoGetResponseDTO | undefined>>;
}

export const MyInfoCard = ({ mode, user, setUser }: Props) => {
  const [phone, setPhone] = useState<string>(user?.phone_number ? user.phone_number : '');
  const [userAddress, setUserAddress] = useState<Partial<UserAddress>>(user?.address ? user.address : {});
  const emaliHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (setUser) setUser({ ...user, email: e.target.value });
    },
    [user, setUser],
  );
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
      <Box>
        <InputLabel mode={mode} value={user?.email || undefined} onChange={emaliHandler} label="E-MAIL" />
      </Box>
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
      <BottonBox>
        <Button color={mode === 'dark' ? 'yellow' : 'black'} size="large" label="SAVE"></Button>
        <Button color="transparent" size="large" label="LOG OUT"></Button>
        <Button color="transparent" size="large" label="LEAVE.."></Button>
      </BottonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 29.4rem;
`;
const Box = styled.div`
  margin: 0.8rem 0;
`;

const BottonBox = styled.div`
  width: 29.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.size.space.medium};
  /* margin-bottom: ${({ theme }) => theme.size.space.xlarge}; */
  margin-bottom: 2rem;
`;
