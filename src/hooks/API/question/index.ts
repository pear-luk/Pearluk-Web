import axios from 'axios';
import { objectToQuery } from '../../util/objectToQuery';
import { QuestionDetailGetResponseDTO, QuestionListGetResponseDTO } from './../../../types/response/question';

import { API } from './../../util/API';
export const getQuestionList = (query: { page?: string; type?: string; product?: string }) => async () => {
  return (await API<QuestionListGetResponseDTO>(`/questions?${objectToQuery(query)}`, { method: 'get' })).data;
};

// export const getProductList =
//   ({ page, archive }: { page: string | string[] | undefined; archive: string | string[] | undefined }) =>
//   async () =>
//     (await API<ProductListGetResponseDTO>(`/products?archive=${archive}&page=${page}`, { method: 'get' })).data;

export const postQusetion = async (data) => {
  return await axios.post('/api/upload', data);
};

export const getQusetionDetail = (question_id: string) => async () => {
  return (await API<QuestionDetailGetResponseDTO>(`/questions/${question_id}`, { method: 'get' })).data;
};
