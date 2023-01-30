import Link from 'next/link';
import styled from 'styled-components';
interface Props {
  write?: boolean;
}
export const QA_top = ({ write = true }) => {
  return (
    <Container>
      <ButtonBox></ButtonBox>
      <TextBox>QA</TextBox>
      <ButtonBox>{write ? <Link href={'/qa/new'}>글쓰기</Link> : '삭제'}</ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 29.4rem;

  display: flex;

  padding: 2.4rem 4.8rem;
  padding-bottom: 1.6rem;

  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 0.1rem solid black;
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
