import { Archive } from './../types/model/archive';

export const archiveMock: Archive = {
  archive_id: 'Asdfasdf',
  title: '22FW',
  year: 2022,
  introduce: '22FW',
};

export const archiveLsitMock: Archive[] = [
  archiveMock,
  { ...archiveMock, archive_id: '23SS', title: '23SS' },
  { ...archiveMock, archive_id: '23FW', title: '23FW' },
];
