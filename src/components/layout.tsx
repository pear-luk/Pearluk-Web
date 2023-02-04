import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useIsLogin } from '../hooks/services/queries/login';

import { INavIconType } from '../recoil/Nav/navState';
import { Footer } from './foundations/Footer';
import { Nav } from './foundations/Nav';

interface Props {
  children?: React.ReactNode;
  mode: ModeType;
  icon: INavIconType;
}

export const LayOut = ({ children, mode, icon }: Props) => {
  const [menuState, setMenuState] = useState(false);

  const { user, login } = useIsLogin();
  const loginState = useMemo(() => {
    console.log(user, login);
  }, [user, login]);

  return (
    <Container>
      <Nav mode={mode} icon={icon} menuState={menuState} setMenuState={setMenuState} />
      <ContentContainer mode={mode}>
        <Content>{children}</Content>
      </ContentContainer>
      <Footer mode={mode} />
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
const Content = styled.div`
  /* width: 29.4rem; */
`;
