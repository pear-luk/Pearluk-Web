import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../../../../components/layout';
import { useSocialLogin } from '../../../../hooks/mutation/login';

import { ModeType } from '../../../../types/common/propsTypes';

const MainBackGroundContainer = styled.div`
  width: auto;

  height: 100%;
  /* background-color: red; */
  padding: 9.2rem 0; //10.4 -1.2
  /* align-items: center; */
  text-align: center;
`;
const ImgBox = styled.div`
  margin: 1.2rem 0;
`;
function KakaoAuth({ ...props }) {
  // mode, icon
  const [mode] = useState<ModeType>('dark');

  // { social_type: 'kakao', social_token: '' }
  // const [login, setLogin] = useState<SocailLoginRequestDTO | null>(null);
  const social_code = useRouter().query.code as string;

  const { mutate } = useSocialLogin();

  useEffect(() => {
    if (social_code) mutate({ social_code, social_type: 'kakao' });
  }, [social_code, mutate]);

  return <LayOut mode={mode} {...props}></LayOut>;
}

export default KakaoAuth;
