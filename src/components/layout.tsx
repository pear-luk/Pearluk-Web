import { useState } from 'react';
import styled from 'styled-components';
import { useIsLogin } from '../hooks/services/queries/login';
import { businessInfoMock } from '../mock/businessInfo.mock';
import { ModeType } from '../types/common/propsTypes';

import { Size } from '../styles/theme';
import { Footer } from './foundations/Footer';
import { Nav } from './foundations/Nav';

interface Props {
  children?: React.ReactNode;
  mode: ModeType;
  centerLogo?: boolean;
  menu?: boolean;
  contentSize?: keyof Size['width'];
}

export const LayOut = ({ children, mode, centerLogo = true, menu = true, contentSize = 'medium' }: Props) => {
  const [menuState, setMenuState] = useState(false);

  const { isLoginLoading } = useIsLogin();

  return (
    <Container>
      <Nav mode={mode} menu={menu} centerLogo={centerLogo} menuState={menuState} setMenuState={setMenuState} />
      <ContentContainer mode={mode}>
        {isLoginLoading ? (
          <Content contentSize={contentSize}>로딩중</Content>
        ) : (
          <Content contentSize={contentSize}>{children}</Content>
        )}
      </ContentContainer>
      <Footer mode={mode} business_info={businessInfoMock} />
    </Container>
  );
};
const Container = styled.div``;
const ContentContainer = styled.main<{ mode: ModeType }>`
  height: auto;
  width: 100%;
  min-height: calc(100vh);
  padding-top: 4.8rem;
  /* padding-bottom: 20rem; */

  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  display: flex;
  justify-content: center;
`;
const Content = styled.div<{ contentSize: keyof Size['width'] }>`
  width: ${({ theme, contentSize }) => contentSize && theme.size.width[contentSize]};
`;
