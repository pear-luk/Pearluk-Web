import { Archive } from '../../../types/model/archive';
import { CreateArchiveDTO } from './../../../types/request/archive';
import { ArchiveListGetResponseDTO } from './../../../types/response/archive';
import { API } from './../../util/API';
// export const getArchiveList = () => API2<null, ArchiveListGetResponseDTO>('/archives', { method: 'get' });

// 1번 호출함
export const getArchiveList = async () => {
  return (await API<ArchiveListGetResponseDTO>('/archives', { method: 'get' })).data;
};

export const createArchive = () => async (mutationData: CreateArchiveDTO) => {
  return (await API<Archive>('/archives', { method: 'post', data: mutationData })).data;
};

export const deleteArchive = () => async (mutationData: Pick<Archive, 'archive_id'>) => {
  const { archive_id } = mutationData;
  return (await API<Archive>(`/archives/${archive_id}`, { method: 'put' })).data;
};
