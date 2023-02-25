import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  font_size?: keyof Size['font'];
  contents: string;
}

// TextArea 개행문자 적용 예정 .
export const H1 = ({ mode, size = 'medium', font_size = 'primary', contents }: Props) => {
  return (
    <StyledH1 mode={mode} size={size} font_size={font_size}>
      {contents}
    </StyledH1>
  );
};

// const Container = styled.div<Omit<Props, 'content'>>`
//   margin-top: 1.6rem 0;
//   font-size: ${({ font_size, theme }) => font_size && theme.size.font[font_size]};

//   word-break: break-all;
//   width: ${({ theme, size }) => size && theme.size.width[size]};
//   color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
// `;

const StyledH1 = styled.h1<Omit<Props, 'contents'>>`
  font-size: ${({ font_size, theme }) => font_size && theme.size.font[font_size]};
  display: block;

  /* overflow: hidden; */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
  width: ${({ theme, size }) => size && theme.size.width[size]};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
