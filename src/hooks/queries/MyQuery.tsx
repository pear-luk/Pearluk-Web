import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { MyInfoGetResponseDTO } from '../../types/response/my';

import { API } from '../util/API';

//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
const getMyInfo = async () => (await API<MyInfoGetResponseDTO>('/my', { method: 'get' })).data;

export const useMyInfo = () => {
  const [myInfo, setMyInfo] = useState<MyInfoGetResponseDTO | null>();
  const { data, isLoading, isError } = useQuery<BaseResponseDTO<MyInfoGetResponseDTO>, AxiosError>(
    ['myInfo'],
    getMyInfo,
    {
      retry: false,
    },
  );

  useEffect(() => {
    if (!data) return;
    if (!data.result) return;
    const { result } = data as BaseResponseDTO<MyInfoGetResponseDTO>;
    setMyInfo(result);
  }, [data]);

  return { myInfo, isMyInfoLoading: isLoading, isMyInfoError: isError };
};
