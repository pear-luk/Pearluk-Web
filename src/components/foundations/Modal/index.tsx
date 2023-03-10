import React from 'react';
import styled from 'styled-components';
import { FontWeight, Size } from '../../../styles/theme';
import { ButtonColorType, ModeType } from '../../../types/common/propsTypes';
import { Button } from '../../elements/Button';

interface Props {
  mode: ModeType;
  font_size?: keyof Size['font'];
  font_weight?: keyof FontWeight;
  message: string;
  OK_Button?: boolean;
  OK_Button_color?: ButtonColorType;
  OK_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

  NO_Button?: boolean;
  NO_Button_color?: ButtonColorType;
  NO_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);
}

export const Modal = ({
  mode,
  message,
  font_size = 'medium',
  font_weight = 'bold',
  OK_Button = true,

  OK_Button_onClick,
  NO_Button = false,

  NO_Button_onClick,
}: Props) => {
  return (
    <ModalWrapper>
      <ModalCard mode={mode} font_size={font_size} font_weight={font_weight}>
        <TextBox>{message}</TextBox>

        <ButtonBox>
          {OK_Button && (
            <Button
              size="medium"
              color={mode === 'dark' ? 'black' : 'yellow'}
              onClick={OK_Button_onClick}
              label="OK"></Button>
          )}
          {NO_Button && (
            <Button
              size="medium"
              color={mode === 'dark' ? 'grey' : 'dark_yellow'}
              onClick={NO_Button_onClick}
              label="NO"></Button>
          )}
        </ButtonBox>
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
  z-index: 99999;
`;

const TextBox = styled.div`
  margin-top: auto;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;
`;

const ModalCard = styled.div<{ mode: ModeType; font_size: keyof Size['font']; font_weight: keyof FontWeight }>`
  min-width: 28rem;
  max-width: 40rem;
  min-height: 16rem;

  padding: 1.6rem;
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: ${({ theme, font_weight }) => font_weight && theme.fontWeight[font_weight]};
  font-size: ${({ font_size, theme }) => font_size && theme.size.font[font_size]};
  padding-bottom: ${({ theme }) => theme.size.space.xlarge};
`;

const ButtonBox = styled.div`
  margin-top: ${({ theme }) => theme.size.space.base};
  /* padding: 0 5.6rem; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 0.4rem;
  }
`;
