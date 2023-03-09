import styled from 'styled-components';

import { ModeType } from '../../types/common/propsTypes';

import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Size } from '../../styles/theme';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { Modal } from '../foundations/Modal';
import { AdminMenu } from '../foundations_admin/Menu';

interface Props {
  children?: React.ReactNode;
  mode: ModeType;
  centerLogo?: boolean;
  menu?: boolean;
  contentSize?: keyof Size['width'];
}

export const AdminLayout = ({ children, mode, contentSize = 'medium' }: Props) => {
  const [errorState, setErrorState] = useState('');
  const [isError, setIsError] = useState(false);
  axios.interceptors.response.use(null, (err: AxiosError<BaseResponseDTO>) => {
    if (err.response?.data.message) {
      setIsError(true);
      setErrorState(err.response?.data.message);
    }
    return Promise.reject(err);
  });

  return (
    <Container>
      {isError && <Modal mode={mode} message={errorState} OK_Button_onClick={() => setIsError(!isError)} />}
      <AdminMenu />
      <ContentContainer mode={mode}>
        <Content contentSize={contentSize}>{children}</Content>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.yellow.yellow};
`;
const ContentContainer = styled.main<{ mode: ModeType }>`
  height: auto;

  min-height: calc(100vh);
  margin: 0 auto;

  /* padding-bottom: 20rem; */

  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  display: flex;
  justify-content: center;
`;
const Content = styled.div<{ contentSize: keyof Size['width'] }>`
  width: 100%;
`;
