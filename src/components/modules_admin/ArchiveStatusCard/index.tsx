import styled from 'styled-components';

type Status = Record<string, { title: string; number: number }>;

interface Props {
  status: Status;
}
export const ArchiveStatusCard_Admin = ({ status = {} }: Props) => {
  return (
    <Container>
      {Object.keys(status)?.map((key) => (
        <ItemBox key={status[key]?.title}>
          <Item>{status[key]?.title}</Item>
          <Item>{status[key]?.number}</Item>
        </ItemBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 3.2rem 4.8rem;
  border: 1px solid black;
  min-width: 50.4rem;
  display: flex;
  justify-content: space-around;
  justify-items: center;
`;

const ItemBox = styled.div`
  font-size: 1.4rem;
  align-items: center;
  text-align: center;
`;

const Item = styled.div`
  margin: 0.8rem;
`;
