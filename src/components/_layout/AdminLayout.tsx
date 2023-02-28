import { useState } from 'react';
import styled from 'styled-components';

import { ModeType } from '../../types/common/propsTypes';

import { useArchiveList } from '../../hooks/queries/archiveQuery';
import { Size } from '../../styles/theme';
import { AdminMenu } from '../foundations_admin/Menu';

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
      <AdminMenu />
      <ContentContainer mode={mode}>
        <Content contentSize={contentSize}>{children}</Content>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const ContentContainer = styled.main<{ mode: ModeType }>`
  height: auto;
  width: 100%;
  min-height: calc(100vh);

  /* padding-bottom: 20rem; */

  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  display: flex;
  justify-content: center;
`;
const Content = styled.div<{ contentSize: keyof Size['width'] }>`
  width: 100%;
`;
