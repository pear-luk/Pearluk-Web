import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';

interface Props {
  mode: ModeType;
  product_id: string;
  product_name: string;
  price: number;
  images: string[];

  slide?: boolean;
}
export const ProductItem = ({ mode, price, product_id, product_name, images, slide = false }: Props) => {
  return (
    <Container mode={mode}>
      <ImageBox></ImageBox>
      <InfoBox>
        <NameBox>PRODUCT NAME PRODUCT NAME PRODUCT NAME PRODUCT NAME</NameBox>
        <PriceBox>
          <Price>{price.toLocaleString()} KRW</Price>
        </PriceBox>
      </InfoBox>
    </Container>
  );
};
const ImageBox = styled.div`
  height: 45.6rem;
`;
const Container = styled.div<{ mode: ModeType }>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  margin-top: 2.4rem;
  width: 34.2rem;

  ${ImageBox} {
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
`;
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NameBox = styled.div`
  font-size: 1.4rem;
  width: 25rem;
  word-break: keep-all;
`;

const PriceBox = styled.div`
  font-size: 1.2rem;
`;

const Price = styled.div``;

const Sale = styled.div``;
