import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { LayOut } from '../components/layout/layout';
import { cartState } from '../recoil/cart/state';

import { ModeType } from '../types/common/propsTypes';
const MainBackGroundContainer = styled.div`
  width: auto;
  height: auto;

  padding: 7.2rem 0; //10.4 -1.2

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
  const [orderValue] = useRecoilState(cartState);
  useEffect(() => {
    orderValue && console.log(orderValue);
  }, [orderValue]);

  return (
    <>
      <LayOut mode={mode} menu={true} centerLogo={true}>
        <MainBackGroundContainer>
          <ImgBox>
            <Image
              alt="LUK"
              src={'/imgs/home_background.svg'}
              width={194}
              height={438.28}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </ImgBox>
        </MainBackGroundContainer>
      </LayOut>
    </>
  );
}

export default Home;
