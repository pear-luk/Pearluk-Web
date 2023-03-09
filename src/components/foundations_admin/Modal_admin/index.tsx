import React from 'react';
import styled from 'styled-components';
import { FontWeight, Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  font_size?: keyof Size['font'];
  font_weight?: keyof FontWeight;
  children?: React.ReactNode;
}

export const AdminModal = ({ mode, font_size = 'medium', font_weight = 'bold', children }: Props) => {
  return (
    <ModalWrapper>
      <ModalCard mode={mode} font_size={font_size} font_weight={font_weight}>
        {children}
      </ModalCard>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99998;
`;

const ModalCard = styled.div<{ mode: ModeType; font_size: keyof Size['font']; font_weight: keyof FontWeight }>`
  width: fit-content;
  height: fit-content;
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70vh;
  overflow: scroll;
  font-weight: ${({ theme, font_weight }) => font_weight && theme.fontWeight[font_weight]};
  font-size: ${({ font_size, theme }) => font_size && theme.size.font[font_size]};
  padding-bottom: ${({ theme }) => theme.size.space.xlarge};
  padding: 1.6rem;
`;
