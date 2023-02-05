import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ButtonColorType } from '../../../types/common/propsTypes';

interface ButtonProps {
  /**
   * What background color to use
   */
  color?: ButtonColorType;

  /**
   * How large should the button be?
   */
  size?: keyof Size['button'];

  /**
   * Button contents
   */
  label: string;

  /**
   * Button opacity
   */
  opacity?: string;

  /**
   * Optional click handler
   */
  onClick?: (() => void) | ((e: React.MouseEvent) => void);
}

export const Button = ({ color = 'black', label, ...props }: ButtonProps) => {
  if (!props.size) props.size = 'medium';

  return (
    <StyledButton color={color} {...props}>
      {label}
    </StyledButton>
  );
};
const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme, color }) => {
    return color === 'black'
      ? theme.color.grey.black
      : color === 'yellow'
      ? theme.color.yellow.yellow
      : color === 'dark_yellow'
      ? theme.color.yellow.darkYellow
      : color === 'grey'
      ? theme.color.grey.grey060
      : 'transparent';
  }};

  font-size: ${({ theme }) => theme.size.font.primary};
  ${({ theme, size }) => size && theme.size.button[size]}

  display: inline-block;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  text-align: center;
  /* padding: 0.5rem 2.5rem; */
  color: ${({ theme, color }) => {
    if (color === 'black' || color === 'grey') {
      return theme.color.yellow.yellow;
    } else {
      return theme.color.grey.black;
    }
  }};
`;
