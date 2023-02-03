import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { SocailLoginRequestDTO } from '../../../types/request/login';
import { API } from '../../util/API';

// export const useSocialLogin = () => {
//   return useMutation<any, AxiosError, object>((info) => axios.post('/api/login/kakao', info));
// };
export const useSocialLogin = () => {
  const route = useRouter();
  return useMutation<AxiosResponse, AxiosError, SocailLoginRequestDTO>(API('/login', { method: 'post' }), {
    onSuccess: ({ data }) => {
      console.log(data);
      route.push('/');
    },
    // onError: () => {
    //   route.push('/login');
    // },
  });
};
// export const useSocialLogin = (loginInfo: SocailLoginRequestDTO) =>
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
