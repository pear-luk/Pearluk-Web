import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { IProduct, OrderItem } from '../OrderItem';

interface Props {
  mode: ModeType;
  order_id: string;
  order_date: Date;
  products: IProduct[];
  orderStatus: string;
}

export const OrderCard = ({ mode, order_id, order_date, products, orderStatus }: Props) => {
  return (
    <Container>
      {/* <Header mode={mode} label="MY ORDER" labelType="left"></Header> */}
      <OrderDateBox>{order_date.toLocaleDateString()}</OrderDateBox>
      {products?.map((product) => {
        return (
          <OrderItemBox key={product.product_id}>
            <OrderItem order_id={order_id} mode={mode} product={product} orderStatus={orderStatus} />
          </OrderItemBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin: 1.6rem auto;
  border-bottom: 1px solid black;
`;
const OrderDateBox = styled.div`
  font-size: ${({ theme }) => theme.size.font.small};
  margin-bottom: 0.8rem;
`;
const OrderItemBox = styled.div`
  margin-bottom: 1.6rem;
`;
