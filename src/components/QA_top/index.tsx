import Link from 'next/link';
import styled from 'styled-components';
interface Props {
  QA_mode?: 'list_read' | 'read' | null;
}
export const QA_top = ({ QA_mode = null }) => {
  return (
    <Container>
      <ButtonBox></ButtonBox>
      <TextBox>QA</TextBox>
      <ButtonBox>
        {QA_mode === 'list_read' ? <Link href={'/qa/new'}>글쓰기</Link> : QA_mode === 'read' ? <>삭제</> : null}
      </ButtonBox>
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
