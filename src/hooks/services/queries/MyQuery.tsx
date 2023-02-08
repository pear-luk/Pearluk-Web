import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { MyGetResponseDTO } from '../../../types/response/user';
import { API } from '../../util/API';

type UseMyInfoType = {
  userInfo?: MyGetResponseDTO;

  isUserInfoLoading: boolean;
  isUserInfoError: boolean;
};

export const useMyInfo = (): UseMyInfoType => {
  const { data, isLoading, isError } = useQuery<AxiosResponse<BaseResponseDTO<MyGetResponseDTO>>, AxiosError>(
    ['myInfo'],
    API('/my', { method: 'get' }),
    {
      retry: false,
    },
  );
  if (data) {
    const { result } = data.data as BaseResponseDTO<MyGetResponseDTO>;
    return { userInfo: result, isUserInfoLoading: isLoading, isUserInfoError: isError };
  }
  return { isUserInfoLoading: isLoading, isUserInfoError: isError };
};
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
