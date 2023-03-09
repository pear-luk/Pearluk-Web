import { authState } from '../../recoil/auth/state';
import { AuthResponseDTO } from '../../types/response/auth';
import { getAuth } from '../API/auth';
import { useRecoilQuery } from '../util/useRecoilQuery';
import { AUTH_KEY } from './key';

//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
export const useAuth = () => {
  const { state, isLoading, refetch } = useRecoilQuery<AuthResponseDTO | null>(authState, AUTH_KEY, getAuth);
  return { authState: state, isLoadingAuth: isLoading, refetchAuth: refetch };
};
