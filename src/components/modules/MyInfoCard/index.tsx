import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { User } from '../../../types/model/user';

import { Button } from '../../elements/Button';
import { InputAddress } from '../../foundations/InputAddress';
import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';

interface Props {
  mode: ModeType;
  user: User;
}

export const MyInfoCard = ({ mode, user }: Props) => {
  const { email, nickname, phone_number } = user;
  const [userInfo, setUserInfo] = useState(user);
  const [phone, setPhone] = useState<string>(user.phone_number ? user.phone_number : '');
  const [userAddress, setUserAddress] = useState<Partial<UserAddress> | undefined>(user.user_address);
  const emaliHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo({ ...userInfo, email: e.target.value });
    },
    [userInfo],
  );
  const nameHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo({ ...userInfo, nickname: e.target.value });
    },
    [userInfo],
  );

  const phoneHandler = useCallback(() => {
    setUserInfo({ ...userInfo, email: phone });
  }, [userInfo, phone]);
  const setAddress = () => {
    setUserInfo({ ...userInfo, email: phone });
  };
  useEffect(() => {
    setUserInfo((userInfo) => ({ ...userInfo, phone_number: phone }));
  }, [phone]);
  useEffect(() => {
    setUserInfo((userInfo) => ({ ...userInfo, user_address: userAddress }));
  }, [userAddress]);
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <Container>
      <Box>
        <InputLabel mode={mode} value={userInfo.email && userInfo.email} onChange={emaliHandler} label="E-MAIL" />
      </Box>
      <Box>
        <InputLabel mode={mode} value={userInfo.nickname && userInfo.nickname} onChange={nameHandler} label="NAME" />
      </Box>
      <Box>
        <InputPhone mode={mode} value={phone} setPhoneNumber={setPhone} label="PHONE"></InputPhone>
      </Box>
      <Box>
        <InputAddress
          mode={mode}
          address={userInfo.user_address}
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
