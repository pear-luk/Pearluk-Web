import { useState } from 'react';
import styled from 'styled-components';

import { businessInfoMock } from '../../mock/businessInfo.mock';
import { ModeType } from '../../types/common/propsTypes';

import { useArchiveList } from '../../hooks/queries/archiveQuery';
import { Size } from '../../styles/theme';
import { Footer } from '../foundations/Footer';
import { Nav } from '../foundations/Nav';

interface Props {
  children?: React.ReactNode;
  mode: ModeType;
  centerLogo?: boolean;
  menu?: boolean;
  contentSize?: keyof Size['width'];
}

export const AdminLayout = ({ children, mode, centerLogo = true, menu = true, contentSize = 'medium' }: Props) => {
  const [menuState, setMenuState] = useState(false);
  const { archiveList } = useArchiveList();

  // const { isLoginLoading, isLoginError } = useIsLogin();
  // const { authState } = useAuth();

  return (
    <Container>
      <Nav
        mode={mode}
        menu={menu}
        centerLogo={centerLogo}
        menuState={menuState}
        setMenuState={setMenuState}
        archiveList={archiveList}
      />
      <ContentContainer mode={mode}>
        <Content contentSize={contentSize}>{children}</Content>
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
