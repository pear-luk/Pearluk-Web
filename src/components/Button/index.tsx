import styled from 'styled-components';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */

  /**
   * What background color to use
   */
  color?: 'black' | 'yellow' | 'dark_yellow' | 'grey_yellow' | 'grey' | 'transparent';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
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

export const Button = ({ size = 'medium', color = 'black', label, opacity, ...props }: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} opacity={opacity}>
      {label}
    </StyledButton>
  );
};
const StyledButton = styled.button<Omit<ButtonProps, 'label' | 'onClick'>>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  background-color: ${({ theme, color }) => {
    return color === 'black'
      ? theme.color.grey.black
      : color === 'yellow'
      ? theme.color.yellow.yellow
      : color === 'dark_yellow'
      ? theme.color.yellow.darkYellow
      : color === 'grey_yellow'
      ? theme.color.grey.yellowGrey
      : color === 'grey'
      ? theme.color.grey.grey060
      : 'transparent';
  }};

  width: ${({ size, theme }) => {
    if (size === 'small') {
      return theme.size.space.small;
    }
    if (size === 'medium') {
      return '8rem';
    }
    if (size === 'large') {
      return '8.8rem';
    }
    if (size === 'xlarge') {
      return '16rem';
    }
  }};

  height: ${({ size, theme }) => {
    if (size === 'small') {
      return theme.size.space.small;
    }
    if (size === 'xlarge') {
      return theme.size.space.large;
    }
    return theme.size.space.base;
  }};

  display: inline-block;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};

  font-size: ${({ theme }) => theme.size.font.primary};
  /* padding: 0.5rem 2.5rem; */
  color: ${({ theme, color }) => {
    if (color === 'black' || color === 'grey' || color === 'grey_yellow') {
      return theme.color.yellow.yellow;
    } else {
      return theme.color.grey.black;
    }
  }};
`;
// 'black' | 'yellow' | 'dark_yellow' | 'grey_yellow' | 'grey' | 'transparent';
