import { useEffect, useState } from 'react';
import { MyTemplate } from '../../components/prototypes/MyTemplate';
import { useMyInfo } from '../../hooks/services/queries/MyQuery';
import { useMyOrderList } from '../../hooks/services/queries/orderQuery';
import { ModeType } from '../../types/common/propsTypes';
import { MyInfoGetResponseDTO } from '../../types/response/my';

function My({ ...props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const { userInfo, isUserInfoLoading } = useMyInfo();

  const [user, setUser] = useState<MyInfoGetResponseDTO | undefined>();
  useEffect(() => {
    userInfo && setUser(userInfo);
  }, [userInfo]);

  const { myOrderList, isMyOrderLoading } = useMyOrderList();

  return isUserInfoLoading || isMyOrderLoading ? (
    <></>
  ) : (
    <MyTemplate mode={mode} user={user} setUser={setUser} orders={myOrderList} {...props} />
  );
}

export default My;
