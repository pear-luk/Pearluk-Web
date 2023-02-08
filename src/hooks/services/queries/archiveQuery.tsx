import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { archiveState } from '../../../recoil/Nav/archiveState';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { Archive } from '../../../types/model/archive';
import { ArchiveGetListResponseDTO } from '../../../types/response/archive';
import { API } from '../../util/API';

type useArchiveType = {
  archiveList: Archive[];

  isArchiveLoading: boolean;
  isArchiveError: boolean;
};

export const useArchive = (): useArchiveType => {
  const [archiveList, setArchiveList] = useRecoilState(archiveState);
  const { isLoading: isArchiveLoading, isError: isArchiveError } = useQuery<
    AxiosResponse<BaseResponseDTO<ArchiveGetListResponseDTO>> | null,
    AxiosError
  >(
    ['archive'],
    archiveList.length === 0 ? API('/archives', { method: 'get' }) : () => null,
    // API('/auth', { method: 'get' }),
    {
      onSuccess: (res) => {
        if (res !== null) {
          const { data } = res as AxiosResponse<BaseResponseDTO<ArchiveGetListResponseDTO>>;
          const { result } = data as BaseResponseDTO<ArchiveGetListResponseDTO>;
          result && setArchiveList([...archiveList, ...result]);
        }
      },

      retry: false,
    },
  );

  return { archiveList, isArchiveLoading, isArchiveError };
};
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
