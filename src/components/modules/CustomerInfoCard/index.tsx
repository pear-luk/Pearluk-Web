import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { MyInfoGetResponseDTO } from '../../../types/response/my';
import { Header } from '../../foundations/Header';

import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';

interface Props {
  mode: ModeType;
  user: MyInfoGetResponseDTO;
  setUser?: Dispatch<SetStateAction<MyInfoGetResponseDTO | undefined>>;
}

export const CustomerInfoCard = ({ mode, user, setUser }: Props) => {
  const [phone, setPhone] = useState<string>(user?.phone_number ? user.phone_number : '');

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

  return (
    <Container>
      <Header label="CUSTOMER" mode={mode} />
      <Box>
        <InputLabel mode={mode} value={user?.nickname || undefined} onChange={nameHandler} label="NAME" />
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
