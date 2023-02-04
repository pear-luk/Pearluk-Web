import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../components/layout';

import { ModeType } from '../types/common/propsTypes';
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
  width: auto;
  height: auto;
`;

function Home() {
  // mode, icon
  const [mode] = useState<ModeType>('dark');

  return (
    <>
      <LayOut mode={mode} menu={true} centerLogo={true}>
        <MainBackGroundContainer>
          <ImgBox>
            <Image alt="LUK" src={'/logo/logo.svg'} width={352.62} height={100} />
          </ImgBox>
          <ImgBox>
            <Image alt="LUK chrome" src={'/logo/logo_chrome.svg'} width={352.62} height={100} />
          </ImgBox>
        </MainBackGroundContainer>
      </LayOut>
    </>
  );
}

export default Home;
