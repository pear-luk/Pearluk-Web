import styled from 'styled-components';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  background?: string;
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
const StyledButton = styled.button<ButtonProps>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme }) => theme.color.yellow.yellow};
  width: 8rem;
  height: 2.4rem;
  /* padding: 0.5rem 2.5rem; */
  /* border: ; */
  display: inline-block;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};

  font-size: ${({ theme }) => theme.size.font.primary};
  /* padding: 0.5rem 2.5rem; */
  color: ${({ theme }) => theme.color.grey.black};
`;
export const Button = ({ size = 'medium', background, label, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};
