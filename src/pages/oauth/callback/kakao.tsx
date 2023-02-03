import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../../../components/layout';
import { useSocialLogin } from '../../../hooks/services/mutation/login';
import { INavIconType } from '../../../recoil/Nav/navState';
import { ModeType } from '../../../types/common/mode';

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
function Home({ props }) {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  // mode, icon
  const [mode] = useState<ModeType>('dark');
  const [icon] = useState<INavIconType>({
    logo: false,
    menu: true,
  });
  // { social_type: 'kakao', social_token: '' }
  // const [login, setLogin] = useState<SocailLoginRequestDTO | null>(null);

  const social_code = useRouter().query.code as string;

  const { mutate } = useSocialLogin();

  useEffect(() => {
    if (social_code) mutate({ social_code, social_type: 'kakao' });
  }, [social_code, mutate]);

  return (
    <LayOut mode={mode} icon={icon}>
      <MainBackGroundContainer>
        <ImgBox>
          <Image alt="LUK" src={'/logo/logo.svg'} width={352.62} height={100} />
        </ImgBox>
      </MainBackGroundContainer>
    </LayOut>
  );
}

export default Home;
