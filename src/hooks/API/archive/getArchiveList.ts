import { ArchiveGetListResponseDTO } from './../../../types/response/archive';
import { API } from './../../util/API';
// export const getArchiveList = () => API2<null, ArchiveGetListResponseDTO>('/archives', { method: 'get' });

// 1번 호출함
export const getArchiveList = async () => {
  return (await API<ArchiveGetListResponseDTO>('/archives', { method: 'get' })).data;
};
