import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
interface Props {
  mode: ModeType;
  orderId: string;
  productsCount: number;
  address: string;
  oderStatus: string;
  mainProductImg: string;
}
export const OrderItem = ({ mode, orderId, productsCount, address, oderStatus, mainProductImg }: Props) => {
  return (
    <Container>
      <ImgBox></ImgBox>

      <OrderInfoBox>
        <OrderIdBox>NO.{orderId}</OrderIdBox>
        <AddressBox></AddressBox>
      </OrderInfoBox>

      <OrderStatusBox>
        <StatusBox>수량</StatusBox>
        <ProductCountBox>1</ProductCountBox>
      </OrderStatusBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.4rem 0;
  border-bottom: 1px solid black;
  width: 29.4rem;
  font-size: 1rem;
  justify-content: left;
  position: relative;
`;

const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  background-color: black;
`;

const OrderInfoBox = styled.div`
  /* background-color: black; */
  height: 5.6rem;

  margin-left: 0.4rem;
  margin-right: 0.4rem;
`;

const OrderIdBox = styled.div``;
const AddressBox = styled.div``;

const OrderStatusBox = styled.div`
  height: 5.6rem;
  width: 5rem;
  padding-right: 0.4rem;
  background-color: yellow;
  align-items: center;
`;

const StatusBox = styled.div`
  width: fit-content;
  /* display: inline-block; */
`;
const ProductCountBox = styled.div`
  margin: auto;
  right: 0;
  display: inline-block;
`;
