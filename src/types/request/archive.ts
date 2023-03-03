import { Archive } from './../model/archive';
export type CreateArchiveDTO = Omit<Archive, 'archive_id'>;
