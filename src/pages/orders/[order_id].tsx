import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LayOut } from '../../components/layout';
import { OrderDetailTemplate } from '../../components/prototypes/OrderDetailTemplate';
import { useDetailOrder } from '../../hooks/queries/orderQuery';
import { ModeType } from '../../types/common/propsTypes';

const OrderDetailPage = () => {
  const router = useRouter();
  const [mode] = useState<ModeType>('dark');
  const { order_id } = router.query;
  const { order, isLoading, isError } = useDetailOrder(order_id as string);
  useEffect(() => {
    console.log(order);
  }, [order]);
  if (isLoading || order === undefined) return <LayOut mode={mode} />;
  if (isError) return router.push('/');
  return <OrderDetailTemplate mode={mode} order={order} />;
  // return <LayOut mode={mode} />;
};
export default OrderDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { order_id } = query;
  return {
    props: {
      order_id,
    },
  };
};
