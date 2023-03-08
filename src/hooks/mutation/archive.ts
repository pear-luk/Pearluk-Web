import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Archive } from '../../types/model/archive';
import { BaseResponseDTO } from './../../types/common/baseResponse';
import { CreateArchiveDTO } from './../../types/request/archive';
import { createArchive, deleteArchive } from './../API/archive/getArchiveList';
import { ARCHIVE_LIST_KEY } from './../queries/key/index';

export const useCreateArchive = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<Archive>, AxiosError, CreateArchiveDTO>(createArchive(), {
    onSuccess: () => {
      queryClient.invalidateQueries(ARCHIVE_LIST_KEY);
    },
  });
};

export const useDeleteArchive = () => {
  const queryClient = useQueryClient();
  return useMutation<BaseResponseDTO<Archive>, AxiosError, Pick<Archive, 'archive_id'>>(deleteArchive(), {
    onSuccess: () => {
      queryClient.invalidateQueries(ARCHIVE_LIST_KEY);
    },
  });
};
