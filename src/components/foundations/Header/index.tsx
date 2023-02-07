import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { HeaderType, ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  header_type?: HeaderType;
  size?: keyof Size['width'];

  label?: string;
  label_size?: keyof Size['font'];

  button_label?: string;
  button_size?: keyof Size['font'];
  button_onClick?: (() => void) | ((e: React.MouseEvent) => void);
}

export const Header = ({
  mode,
  label,
  header_type = 'center',
  label_size = 'primary',
  size = 'medium',
  button_label,
  button_size = 'small',
  button_onClick,
}: Props) => {
  return (
    <Container mode={mode} header_type={header_type} label_size={label_size} size={size} button_label={button_label}>
      {header_type === 'center' && button_label && <ButtonBox></ButtonBox>}
      <LabelBox>{label}</LabelBox>
      {button_label && (
        <ButtonBox>
          <Button onClick={button_onClick} button_size={button_size}>
            {button_label}
          </Button>
        </ButtonBox>
      )}
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'label'>>`
  height: auto;
  width: ${({ theme, size }) => size && theme.size.width[size]};

  padding-top: 2.4rem;
  padding-bottom: 0.8rem;

  display: flex;
  justify-content: ${({ header_type, button_label }) => (button_label ? 'space-between' : header_type)};
  justify-content: space-between;
  /* align-items: flex-end; */

  border-bottom: 1px solid
    ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  background-color: transparent;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  font-size: ${({ theme, label_size }) => label_size && theme.size.font[label_size]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: ${({ header_type }) => header_type};
`;
const LabelBox = styled.div`
  flex: 1 0 auto;
`;

const ButtonBox = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: right;
  position: relative;
`;
const Button = styled.div<{ button_size?: keyof Size['font'] }>`
  width: fit-content;
  float: right;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: ${({ theme, button_size }) => button_size && theme.size.font[button_size]};
  font-weight: 400;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  cursor: pointer;
`;
