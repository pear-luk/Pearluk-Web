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

export const postQuestion = async (data) => {
  return await axios.post('/api/upload', data);
};

export const getQusetionDetail = (question_id: string) => async () => {
  return (await API<QuestionDetailGetResponseDTO>(`/questions/${question_id}`, { method: 'get' })).data;
};

export const getSecretQuestion = (cart_product_id: string) => async (mudationData: { password: string }) => {
  return (
    await API<QuestionDetailGetResponseDTO>(`/questions/${cart_product_id}`, { method: 'post', data: mudationData })
  ).data;
};
