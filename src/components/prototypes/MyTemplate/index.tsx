import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { MyInfoGetResponseDTO } from '../../../types/response/my';
import { MyOrderListGetResponseDTO } from '../../../types/response/order';

import { Header } from '../../foundations/Header';
import { AmountCard } from '../../modules/AmountCard';
import { MyInfoCard } from '../../modules/MyInfoCard';
import { OrderListCard } from '../../modules/OrderListCard';
import { LayOut } from '../../_layout/layout';
interface Props {
  mode: ModeType;
  user?: MyInfoGetResponseDTO;
  setUser?: Dispatch<SetStateAction<MyInfoGetResponseDTO | undefined>>;
  orders: MyOrderListGetResponseDTO;
  size?: keyof Size['width'];
}

export const MyTemplate = ({ mode, user, orders, setUser }: Props) => {
  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="MY PAGE" />
      <ContentBox mode={mode}>
        <AmountCard mode={mode} point={undefined} total={undefined} />
      </ContentBox>

      <ContentBoxNoBorderBox>
        <MyInfoCard mode={mode} user={user as MyInfoGetResponseDTO} setUser={setUser}></MyInfoCard>
      </ContentBoxNoBorderBox>

      <Header mode={mode} label="MY ORDER" header_type="left" />
      {Array.isArray(orders) &&
        orders.map((order) => {
          return (
            <Link href={`/orders/${order.order_id}`} key={order.order_id}>
              <OrderListCard mode={mode} order={order} />
            </Link>
          );
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
