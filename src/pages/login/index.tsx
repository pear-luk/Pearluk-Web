import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../../components/layout';
import { ModeType } from '../../recoil/config/configState';
import { INavIconType } from '../../recoil/Nav/navState';

function Login({ props }) {
  // mode, icon
  const [mode] = useState<ModeType>('dark');
  const [icon] = useState<INavIconType>({
    logo: true,
    menu: false,
  });
  return (
    <LayOut mode={mode} icon={icon}>
      <Box>
        <Image alt="카카오로그인" src="./kakao/kakaoLogin.svg" width="200" height="49" />
      </Box>
    </LayOut>
  );
}

export default Login;

const Box = styled.div`
  width: 100%;
  height: 100%;
  margin: 12rem 0;
  display: flex;
  justify-content: center;
`;
