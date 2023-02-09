import { archiveListState } from '../../recoil/archive/state';
import { Archive } from '../../types/model/archive';
import { getArchiveList } from '../API/archive/getArchiveList';
import { useRecoilQuery } from '../util/useRecoilQuery';
import { ARCHIVE_LIST_KEY } from './key';

export const useArchiveList = () => {
  const { state, isLoading, refetch } = useRecoilQuery<Archive[]>(archiveListState, ARCHIVE_LIST_KEY, getArchiveList);

  return { archiveList: state, isLoadingArchiveList: isLoading, refetchArchiveList: refetch };
};
