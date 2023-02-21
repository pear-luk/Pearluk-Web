import { useRouter } from 'next/router';
import { useState } from 'react';
import { LayOut } from '../../components/layout';
import { OrderDetailTemplate } from '../../components/prototypes/OrderDetailTemplate';
import { useDetailOrder } from '../../hooks/queries/orderQuery';
import { ModeType } from '../../types/common/propsTypes';
import { Order } from '../../types/model/order';

const ArchivePage = () => {
  const router = useRouter();
  const [mode] = useState<ModeType>('dark');
  const { order_id } = router.query;
  const { order, isLoading, isError } = useDetailOrder(order_id);

  if (isLoading) return <LayOut mode={mode} />;
  if (isError) return router.push('/');
  return <OrderDetailTemplate mode={mode} order={order as Order} />;
};
export default ArchivePage;
