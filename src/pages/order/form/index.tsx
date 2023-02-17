import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { LayOut } from '../../../components/layout';
import { OrderFormTemplate } from '../../../components/prototypes/OrderFormTemplate';
import { useMyInfo } from '../../../hooks/queries/MyQuery';
import { orderProductState } from '../../../recoil/order/state';

import { ModeType } from '../../../types/common/propsTypes';
import { MyInfoGetResponseDTO } from '../../../types/response/my';

// interface Props {}
function OrderFormPage() {
  const [mode] = useState<ModeType>('white');
  const productList = useRecoilValue(orderProductState);
  const { myInfo } = useMyInfo();

  const [user, setUser] = useState<MyInfoGetResponseDTO | undefined>();
  useEffect(() => {
    myInfo && setUser(myInfo);
  }, [myInfo]);

  // const [write, setWrite] = useState(false);

  // const buttonHandler = useCallback(() => {
  //   setWrite(!write);
  // }, [write]);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <OrderFormTemplate mode={mode} user={user} cartProductList={productList} />
    </LayOut>
  );
}

export default OrderFormPage;
