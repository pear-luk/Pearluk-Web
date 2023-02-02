import { CommonInfo } from './../common/commonData';
export type Archive = {
  archive_id: string;
  title: string;
  year: number;
  introduce: string | null;
} & CommonInfo;
