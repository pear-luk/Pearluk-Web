import Link from 'next/link';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/mode';

export type QA_mode = 'list_read' | 'read' | 'product' | 'write';
interface Props {
  QA_mode?: 'list_read' | 'read' | 'product' | 'write' | null;
  mode: ModeType;
  size: 'large' | 'medium';
  page: 'qa' | 'product';
}
export const QnAHeader = ({ mode = 'dark', QA_mode, size = 'medium', page = 'qa' }: Props) => {
  return (
    <Container mode={mode} size={size}>
      {page === 'qa' ? (
        <>
          <ButtonBox></ButtonBox>
          <TextBox>QA</TextBox>
        </>
      ) : (
        <>
          <TextBox>QA</TextBox>
          <ButtonBox></ButtonBox>
        </>
      )}
      {/* <ButtonBox></ButtonBox>
      <TextBox>QA</TextBox> */}
      <ButtonBox>
        {QA_mode === 'list_read' ? (
          <Link href={'/qa/new'}>글쓰기</Link>
        ) : QA_mode === 'read' ? (
          <>삭제</>
        ) : QA_mode === 'write' ? (
          <>취소</>
        ) : null}
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div<Pick<Props, 'mode' | 'size'>>`
  width: ${({ size, theme }) => (size === 'medium' ? theme.size.width.medium : theme.size.width.large)};

  display: flex;

  padding: 2.4rem 0;
  padding-bottom: 1.6rem;

  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid
    ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  a {
    color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
  a:visited {
    color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
`;
const TextBox = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;
const ButtonBox = styled.div`
  font-size: 1rem;
  width: 3rem;

  text-align: right;
  height: auto;
`;
