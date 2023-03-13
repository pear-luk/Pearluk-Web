import styled from 'styled-components';
import { ProductStatusResponseDTO } from '../../../types/response/product';

interface Props {
  productStatus?: ProductStatusResponseDTO | null;
  storybook?: boolean;
}
export const ProductStatusCard = ({ productStatus }: Props) => {
  console.log('productStatus');
  return (
    <Container>
      {productStatus &&
        productStatus !== null &&
        Object.keys(productStatus)?.map((key) => (
          <ItemBox key={key}>
            <Item>{key}</Item>
            <Item>{productStatus[key]}</Item>
          </ItemBox>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
