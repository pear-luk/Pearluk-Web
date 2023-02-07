import Image from 'next/image';
import { forwardRef, RefObject } from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  width?: string;
  height?: string;
  forwardedRef?: RefObject<HTMLInputElement>;

  onClick?: () => void;
}

export const ImgButton = forwardRef(({ img, onClick, width = '1.2rem', height = '1.2rem', forwardedRef }: Props) => {
  return (
    <StyledButton onClick={onClick} width={width} height={height} ref={forwardedRef}>
      <Image
        alt="상품 메인이미지"
        src={img}
        fill
        style={{ objectFit: 'contain', fill: 'red' }}
        sizes="auto 100%"></Image>
    </StyledButton>
  );
});

const StyledButton = styled.div<Omit<Props, 'img'>>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  align-items: center;
  cursor: pointer;
`;
