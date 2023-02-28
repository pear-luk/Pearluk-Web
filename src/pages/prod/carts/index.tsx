import { useState } from 'react';
import styled from 'styled-components';
import { LayOut } from '../../../components/_layout/layout';

import { ModeType } from '../../../types/common/propsTypes';

function Home() {
  // mode, icon
  const [mode] = useState<ModeType>('white');

  return (
    <LayOut mode={mode}>
      <AboutContainer>
        <TextBox>
          afdkljkdfasljdfkljfsld
          <p>{`LUK≠LUCK. IT'S ACQUIRES.`}</p>
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
