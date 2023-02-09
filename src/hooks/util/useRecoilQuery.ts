import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { RecoilState, useRecoilState } from 'recoil';
import { BaseResponseDTO } from './../../types/common/baseResponse';

export const useRecoilQuery = <T>(
  recoilState: RecoilState<T>,
  key: string | unknown[],
  getFunc: () => Promise<BaseResponseDTO<T>>,
  staleTime = Infinity,
  // suspense = true,
) => {
  const [state, setState] = useRecoilState(recoilState);
  const { isLoading, data, refetch } = useQuery(key, getFunc, {
    staleTime,
    // suspense,
    retry: 0,
  });

  useEffect(() => {
    if (!data) return;
    if (!data.result) return;
    setState(data.result);
  }, [data, setState]);

  return { state, isLoading, refetch };
};
