import axios from 'axios';
import { objectToQuery } from '../../util/objectToQuery';
import { QuestionImg } from './../../../types/model/question';
import { QuestionCreateRequestDTO } from './../../../types/request/question';
import {
  QuestionDetailGetResponseDTO,
  QuestionListGetResponseDTO,
  QuestionPostResponseDTO,
} from './../../../types/response/question';

import { API } from './../../util/API';

export const getQuestionList = (query: { page?: string; type?: string; product?: string }) => async () => {
  return (await API<QuestionListGetResponseDTO>(`/questions?${objectToQuery(query)}`, { method: 'get' })).data;
};

//img
export const postQuestion = async (data) => {
  return await axios.post('/api/upload', data);
};

export const getQusetionDetail = (question_id: string) => async () => {
  return (await API<QuestionDetailGetResponseDTO>(`/questions/${question_id}`, { method: 'get' })).data;
};

export const getSecretQuestion = (question_id: string) => async (mutationData: { password: string }) => {
  return (await API<QuestionDetailGetResponseDTO>(`/questions/${question_id}`, { method: 'post', data: mutationData }))
    .data;
};

export const createQuestion = () => async (mutationData: QuestionCreateRequestDTO) => {
  return (await API<QuestionPostResponseDTO>(`/questions`, { method: 'post', data: mutationData })).data;
};

export const uploadQuestionImgs = (question_id: string) => async (mutationData: FormData) => {
  return (await API<QuestionImg[]>(`/upload/questions/${question_id}`, { method: 'post', data: mutationData })).data;
};
