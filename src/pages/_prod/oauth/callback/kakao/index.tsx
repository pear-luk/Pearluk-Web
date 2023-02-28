import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LayOut } from '../../../../../components/_layout/layout';
import { useSocialLogin } from '../../../../../hooks/mutation/login';

import { ModeType } from '../../../../../types/common/propsTypes';

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
