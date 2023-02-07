import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { archiveLsitMock } from '../../../mock/archive.mock';
import { archiveState } from '../../../recoil/Nav/archiveState';
import { Archive } from '../../../types/model/archive';

type useArchiveType = {
  archiveList: Archive[];

  isArchiveLoading: boolean;
  isArchiveError: boolean;
};

export const useArchive = (): useArchiveType => {
  const [archiveList, setArchiveList] = useRecoilState(archiveState);
  const { isLoading: isArchiveLoading, isError: isArchiveError } = useQuery(
    ['archive'],
    archiveList.length === 0 ? () => archiveLsitMock : () => null,
    // API('/auth', { method: 'get' }),
    {
      onSuccess: (res) => {
        res && setArchiveList([...archiveList, ...res]);
      },

      retry: false,
    },
  );

  return { archiveList, isArchiveLoading, isArchiveError };
};
//   useMutation(API('/login', { method: 'post', data: loginInfo }), { retry: false });
