import { useEffect, useState } from 'react';
import { MyTemplate } from '../../components/prototypes/MyTemplate';
import { useMyInfo } from '../../hooks/services/queries/MyQuery';
import { orderMock } from '../../mock/order.mock';
import { ModeType } from '../../types/common/propsTypes';
import { MyInfoGetResponseDTO } from '../../types/response/my';

function My() {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const { userInfo, isUserInfoLoading } = useMyInfo();
  const [user, setUser] = useState<MyInfoGetResponseDTO | undefined>();
  useEffect(() => {
    userInfo && setUser(userInfo);
  }, [userInfo]);

  return isUserInfoLoading || <MyTemplate mode={mode} user={user} setUser={setUser} orders={[orderMock]} />;
}

export default My;
