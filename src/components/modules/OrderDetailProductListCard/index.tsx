import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Order, OrderProduct, OrderStatusEnum } from '../../../types/model/order';
import { Button } from '../../elements/Button';
import { OrderListItem } from '../../foundations/OrderListItem';

interface Props {
  mode: ModeType;

  order: Order;

  size?: keyof Size['width'];
}

export const OrderDetailProductListCard = ({ mode, size = 'medium', order }: Props) => {
  const {
    //  order_id, name, user_id, total_price,

    order_products,
    order_status,
    created_at,
    shipping,
  } = order;
  return (
    <Container mode={mode} size={size}>
      <OrderDateBox>DATE. {created_at && new Date(created_at).toLocaleDateString()}</OrderDateBox>
      <OrderDateBox>NO. {order.order_id}</OrderDateBox>
      <OrderDateBox>SHIPPING FEE. KRW {3500}</OrderDateBox>
      {order_products?.map((product: OrderProduct) => {
        return (
          <OrderItemBox key={product.product_id}>
            <OrderListItem
              mode={mode}
              product={product}
              order_status={OrderStatusEnum[order_status]}
              shipping={shipping || undefined}
            />
          </OrderItemBox>
        );
      })}

      <ButtonBox>
        <Button label="주문취소" color={mode === 'dark' ? 'yellow' : 'black'} size="xlarge" />
        <Button label="TRACK ORDER " color={mode === 'dark' ? 'yellow' : 'black'} size="xlarge" />
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div<{ size?: keyof Size['width']; mode: ModeType }>`
  margin: 1.6rem 0;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  width: ${({ theme, size }) => size && theme.size.width[size]};
`;
const OrderDateBox = styled.div`
  font-size: ${({ theme }) => theme.size.font.small};
  margin-bottom: 0.8rem;
`;
const OrderItemBox = styled.div`
  margin-bottom: 1.6rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.4rem 0;
`;
