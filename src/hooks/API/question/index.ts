import { objectToQuery } from '../../util/objectToQuery';
import { QuestionListGetResponseDTO } from './../../../types/response/question';

import { API } from './../../util/API';
export const getQuestionList = (query: { page?: string; type?: string; product?: string }) => async () => {
  console.log(objectToQuery(query));
  return (await API<QuestionListGetResponseDTO>(`/questions?${objectToQuery(query)}`, { method: 'get' })).data;
};

// export const getProductList =
//   ({ page, archive }: { page: string | string[] | undefined; archive: string | string[] | undefined }) =>
//   async () =>
//     (await API<ProductListGetResponseDTO>(`/products?archive=${archive}&page=${page}`, { method: 'get' })).data;
