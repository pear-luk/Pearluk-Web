import { faker } from '@faker-js/faker';
import { ulid } from 'ulid';
import { Archive } from './../types/model/archive';

// export const archiveMock: Archive = {
//   archive_id: 'Asdfasdf',
//   title: '22FW',
//   year: 2022,
//   introduce: '22FW',
// };
export const archiveMock = (): Archive => ({
  archive_id: ulid(),
  title: faker.lorem.words(2),
  year: faker.datatype.number({ max: 2026, min: 2000 }),
  introduce: faker.lorem.lines(3),
});

export const archiveLsitMock: Archive[] = Array(10)
  .fill(0)
  .map(() => archiveMock());
