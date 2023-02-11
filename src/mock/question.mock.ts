import { faker } from '@faker-js/faker';
import { Question } from './../types/model/question';
// Omit<Question, 'password' | 'contents'>
export const questionListItemMock = (): Omit<Question, 'password' | 'contents'> => ({
  question_id: faker.lorem.word(26),
  title: faker.lorem.lines(2),

  secret_mode: faker.datatype.number({ min: 0, max: 1 }),
  user_id: faker.lorem.word(26),

  // Join
  writer: {
    user_id: faker.lorem.word(26),
    nickname: faker.lorem.word(26),
  },
  created_at: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
  answer_count: faker.datatype.number({ min: 0, max: 10 }),
});

export const questionItem = (): Omit<Question, 'password'> => ({
  ...questionListItemMock(),
  contents: faker.lorem.lines(26),
});
// product_id: faker.lorem.word(26),
// name: faker.lorem.word(26),
// price: faker.datatype.number({ min: 10000, max: 200000 }),
// introduce: faker.lorem.lines(10),
// quantity: faker.datatype.number({ min: 0, max: 20 }),
// product_status: faker.datatype.number({ min: 0, max: 3 }),
// archive_id: faker.lorem.word(26),
// category_id: faker.lorem.word(26),
// imgs: imgFaker,
