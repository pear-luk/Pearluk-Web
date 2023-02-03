import { useQuery } from 'react-query';
import { API } from '../../util/API';

export const useGet = () => {
  return useQuery(['login'], API('/', { method: 'post', data: { asd: '123' } }), {
    onSuccess: (data) => {
      console.log(data);
    },
    retry: false,
  });
};
