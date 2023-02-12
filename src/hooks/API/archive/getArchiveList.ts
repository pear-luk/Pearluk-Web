import { ArchiveListGetResponseDTO } from './../../../types/response/archive';
import { API } from './../../util/API';
// export const getArchiveList = () => API2<null, ArchiveListGetResponseDTO>('/archives', { method: 'get' });

// 1번 호출함
export const getArchiveList = async () => {
  return (await API<ArchiveListGetResponseDTO>('/archives', { method: 'get' })).data;
};
