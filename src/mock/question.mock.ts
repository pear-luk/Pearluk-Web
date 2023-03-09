import { faker } from '@faker-js/faker';
import { ulid } from 'ulid';
import { Answer, AnswerImg } from './../types/model/answer';
import { Question, QuestionImg } from './../types/model/question';
// Omit<Question, 'password' | 'contents'>
export const questionListItemMock = (): Omit<Question, 'password' | 'contents' | 'imgs'> => ({
  question_id: ulid(),
  title: faker.lorem.lines(2),

  secret_mode: faker.datatype.number({ min: 0, max: 1 }),
  user_id: ulid(),

  // Join
  user: {
    user_id: ulid(),
    nickname: faker.lorem.word(26),
  },
  created_at: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
  answer_count: faker.datatype.number({ min: 0, max: 10 }),
});

export const questionItem = (): Omit<Question, 'password' | 'imgs'> => ({
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
export const questionDetailMock = (): Question => ({
  question_id: ulid(),
  title: faker.lorem.lines(2),
  contents: faker.lorem.lines(6),
  secret_mode: faker.datatype.number({ min: 0, max: 1 }),
  user_id: ulid(),

  // Join
  user: {
    user_id: ulid(),
    nickname: faker.lorem.word(26),
  },
  created_at: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
  answer_count: faker.datatype.number({ min: 0, max: 10 }),
  imgs: Array(faker.datatype.number({ min: 0, max: 10 }))
    .fill(0)
    .map(() => qustionImgMock()),

  answers: Array(faker.datatype.number({ min: 0, max: 3 }))
    .fill(0)
    .map(() => answerMock()),
});

export const qustionImgMock = (): QuestionImg => ({
  question_img_id: ulid(),
  question_id: ulid(),
  url: faker.image.cats(),
  sequence: faker.datatype.number({ min: 0, max: 10 }),
});

export const answerMock = (): Answer => ({
  answer_id: ulid(),

  contents: faker.lorem.lines(5),
  product_id: null,
  question_id: ulid(),

  imgs: Array(faker.datatype.number({ min: 0, max: 10 }))
    .fill(0)
    .map(() => answerImgMock()),
});

export const answerImgMock = (): AnswerImg => ({
  answer_img_id: ulid(),
  answer_id: ulid(),
  url: faker.image.animals(),
  sequence: faker.datatype.number({ min: 0, max: 10 }),
});
