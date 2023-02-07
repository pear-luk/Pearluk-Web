import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { Order } from '../../../types/model/order';
import { User } from '../../../types/model/user';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../layout';
import { AmountCard } from '../../modules/AmountCard';
import { MyInfoCard } from '../../modules/MyInfoCard';
import { OrderListCard } from '../../modules/OrderListCard';
interface Props {
  mode: ModeType;
  user?: User;
  orders: Order[];
}

export const MyTemplate = ({ mode, user, orders }: Props) => {
  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="MY PAGE" />
      <ContentBox mode={mode}>
        <AmountCard mode={mode} point={11111111} total={111111} />
      </ContentBox>

      <ContentBoxNoBorderBox>
        <MyInfoCard mode={mode}></MyInfoCard>
      </ContentBoxNoBorderBox>

      <Header mode={mode} label="MY ORDER" header_type="left" />
      {orders.map((order, i) => {
        const { order_id } = order;
        return <OrderListCard mode={mode} order={order}></OrderListCard>;
      })}
    </LayOut>
  );
};
const ContentBoxNoBorderBox = styled.div`
  padding: 1.6rem 0;
`;
const ContentBox = styled(ContentBoxNoBorderBox)<{ mode: ModeType }>`
  border-bottom: 1px solid
    ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
