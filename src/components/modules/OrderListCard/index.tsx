import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Order, OrderStatusEnum } from '../../../types/model/order';
import { OrderListItem } from '../../foundations/OrderListItem';

interface Props {
  mode: ModeType;
  order: Order;
}

export const OrderListCard = ({ mode, size = 'medium', order }: Props) => {
  const { order_id, name, user_id, total_price, order_products, order_status, created_at, shipping } = order;
  return (
    <Container size={size}>
      {/* <Header mode={mode} label="MY ORDER" labelType="left"></Header> */}
      <OrderDateBox>{created_at && new Date(created_at).toLocaleDateString()}</OrderDateBox>
      {order_products?.map((product) => {
        return (
          <OrderItemBox key={product.product_id}>
            <OrderListItem
              mode={mode}
              product={product}
              order_status={OrderStatusEnum[order_status]}
              shipping={shipping}
            />
          </OrderItemBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div<{ size?: keyof Size['width'] }>`
  margin: 1.6rem 0;
  border-bottom: 1px solid black;
  width: ${({ theme, size }) => size && theme.size.width[size]};
`;
const OrderDateBox = styled.div`
  font-size: ${({ theme }) => theme.size.font.small};
  margin-bottom: 0.8rem;
`;
const OrderItemBox = styled.div`
  margin-bottom: 1.6rem;
`;
