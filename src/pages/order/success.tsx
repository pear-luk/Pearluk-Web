import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { LayOut } from '../../components/layout';
import { orderState } from '../../recoil/order/state';

import { ModeType } from '../../types/common/propsTypes';

// interface Props {}
function OrderSuccess() {
  const [mode] = useState<ModeType>('white');
  const router = useRouter();
  // const { myInfo } = useMyInfo();
  const [orderValue] = useRecoilState(orderState);
  // const [user, setUser] = useState<MyInfoGetResponseDTO | undefined>();

  useEffect(() => {
    router && console.log(router);
  }, [router]);
  useEffect(() => {
    console.log(orderValue);
  }, [orderValue]);

  // const [write, setWrite] = useState(false);

  // const buttonHandler = useCallback(() => {
  //   setWrite(!write);
  // }, [write]);

  return <LayOut mode={mode} />;
}

export default OrderSuccess;
