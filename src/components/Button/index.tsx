import styled from 'styled-components';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  color?: 'black' | 'yellow' | 'dark_yellow' | 'grey';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;

  opacity?: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}
const StyledButton = styled.button<Omit<ButtonProps, 'label' | 'onClick'>>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme, color }) => {
    return color === 'black'
      ? theme.color.grey.black
      : color === 'yellow'
      ? theme.color.yellow.yellow
      : color === 'dark_yellow'
      ? theme.color.yellow.darkYellow
      : color === 'grey'
      ? theme.color.grey.yellowGrey
      : theme.color.grey.black;
  }};
  color: yellow;
  width: 8rem;
  height: 2.4rem;
  /* padding: 0.5rem 2.5rem; */
  /* border: ; */
  display: inline-block;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};

  font-size: ${({ theme }) => theme.size.font.primary};
  /* padding: 0.5rem 2.5rem; */
  color: ${({ theme, color }) => {
    if (color === 'black' || color === 'grey') {
      return theme.color.yellow.yellow;
    } else {
      return theme.color.grey.black;
    }
  }};
`;
export const Button = ({ size = 'medium', color = 'black', label, ...props }: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} {...props}>
      {label}
    </StyledButton>
  );
};
