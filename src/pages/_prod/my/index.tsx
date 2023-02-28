import { useEffect, useState } from 'react';
import { MyTemplate } from '../../../components/prototypes/MyTemplate';
import { useMyInfo } from '../../../hooks/queries/MyQuery';
import { useMyOrderList } from '../../../hooks/queries/orderQuery';

import { ModeType } from '../../../types/common/propsTypes';
import { MyInfoGetResponseDTO } from '../../../types/response/my';

function My({ ...props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const { myInfo, isMyInfoLoading } = useMyInfo();

  const [user, setUser] = useState<MyInfoGetResponseDTO | undefined>();
  useEffect(() => {
    myInfo && setUser(myInfo);
  }, [myInfo]);

  const { myOrderList, isMyOrderLoading } = useMyOrderList();

  return isMyInfoLoading || isMyOrderLoading ? (
    <></>
  ) : (
    <MyTemplate mode={mode} user={user} setUser={setUser} orders={myOrderList} {...props} />
  );
}

export default My;
