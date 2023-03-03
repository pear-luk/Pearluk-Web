import { useCallback, useState } from 'react';
import { AdminModal } from '../../components/foundations_admin/Modal_admin';
import { ModeType } from '../../types/common/propsTypes';

interface Props {
  mode: ModeType;

  Content?: JSX.Element;
}
export const useAdminModal = ({ mode, Content }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  // 모달 닫기
  const close = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    Modal: isOpen ? () => <AdminModal mode={mode}>{Content}</AdminModal> : () => null,
    open,
    close,
    isOpen,
    setIsOpen,
  };
};

// mode: ModeType;
// font_size?: keyof Size['font'];
// font_weight?: keyof FontWeight;
// Content?: (() => JSX.Element) | (() => null);
// OK_Button?: boolean;
// OK_Button_color?: ButtonColorType;
// OK_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

// NO_Button?: boolean;
// NO_Button_color?: ButtonColorType;
// NO_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);
