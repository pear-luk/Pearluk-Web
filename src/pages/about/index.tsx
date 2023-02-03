import { useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../../components/layout';

import { INavIconType } from '../../recoil/Nav/navState';
import { ModeType } from '../../types/common/mode';

function Home({ props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const [icon] = useState<INavIconType>({
    logo: true,
    menu: true,
  });
  return (
    <LayOut mode={mode} icon={icon}>
      <AboutContainer>
        <TextBox>
          <p>PEARLUK</p>
          <p>펄럭</p>
          <p>ALL LUK ACC</p>
          <p>HANDMADE</p>
          <p>LUK≠LUCK.IT'S ACQUIRES</p>
        </TextBox>
      </AboutContainer>
    </LayOut>
  );
}

export default Home;

const AboutContainer = styled.div`
  width: 100%;

  height: 100%;
  /* background-color: red; */
  padding: 9.2rem 0; //10.4 -1.2

  justify-content: center;
  text-align: right;
  display: flex;
`;
const TextBox = styled.div`
  margin: 1.2rem 0;
  font-size: 2rem;
  font-weight: 700;
`;
