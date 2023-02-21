import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LayOut } from '../../components/layout';
import { useConfirmOrder } from '../../hooks/mutation/order';

import { ModeType } from '../../types/common/propsTypes';

// interface Props {}
function OrderSuccess() {
  const [mode] = useState<ModeType>('white');
  const router = useRouter();
  // const { myInfo } = useMyInfo();

  // const [user, setUser] = useState<MyInfoGetResponseDTO | undefined>();
  const { mutateAsync } = useConfirmOrder();
  useEffect(() => {
    router && console.log(router.query);
    if (router.query) {
      const { amount, orderId, paymentKey } = router.query;
      amount &&
        orderId &&
        paymentKey &&
        mutateAsync({
          amount: amount as string,
          order_id: orderId as string,
          payment_key: paymentKey as string,
        }).then(() => router.push(`/orders/${orderId}`));
    }
  }, [router, mutateAsync]);

  // const [write, setWrite] = useState(false);

  // const buttonHandler = useCallback(() => {
  //   setWrite(!write);
  // }, [write]);

  return <LayOut mode={mode} />;
}

export default OrderSuccess;
