import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../../../components/_layout/layout';
import { ModeType } from '../../../types/common/propsTypes';

function Login() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_REDIRECT_URL = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
  // mode, icon
  const [mode] = useState<ModeType>('dark');
  console.log(`${DOMAIN}${KAKAO_REDIRECT_URI}`);
  return (
    <LayOut mode={mode}>
      <Box>
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${
            DOMAIN ? `http://${DOMAIN}${KAKAO_REDIRECT_URI}` : KAKAO_REDIRECT_URL
          }&response_type=code`}>
          <Image alt="카카오로그인" src="./kakao/kakaoLogin.svg" width="200" height="49" />
        </Link>
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
