import { useCallback, useState } from 'react';
import { Modal } from '../../components/foundations/Modal';
import { ModeType } from '../../types/common/propsTypes';

interface Props {
  mode: ModeType;

  message: string;
  OK_Button?: boolean;
  OK_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);
  NO_Button?: boolean;
}
export const useModal = ({ mode, message, OK_Button_onClick, NO_Button, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  // 모달 닫기
  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    Modal: isOpen
      ? () => (
          <Modal
            mode={mode}
            message={message}
            NO_Button_onClick={NO_Button ? close : undefined}
            OK_Button_onClick={NO_Button ? OK_Button_onClick : close}
            {...props}
          />
        )
      : () => null,
    open,
    close,
    isOpen,
    setIsOpen,
  };
};
