import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { OrderFormTemplate } from '../../../components/prototypes/OrderFormTemplate';
import { useMyInfo } from '../../../hooks/queries/MyQuery';
import { orderProductState } from '../../../recoil/order/state';

import { ModeType } from '../../../types/common/propsTypes';

// interface Props {}
function OrderFormPage() {
  const [mode] = useState<ModeType>('white');
  const productList = useRecoilValue(orderProductState);
  const { myInfo } = useMyInfo();

  // const [write, setWrite] = useState(false);

  // const buttonHandler = useCallback(() => {
  //   setWrite(!write);
  // }, [write]);

  return <OrderFormTemplate mode={mode} user={myInfo} cartProductList={productList} />;
}

export default OrderFormPage;
