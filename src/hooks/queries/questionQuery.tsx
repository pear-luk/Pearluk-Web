import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { BaseResponseDTO } from '../../types/common/baseResponse';
import { Question } from '../../types/model/question';
import { QuestionListGetResponseDTO } from '../../types/response/question';
import { getQuestionList } from '../API/question';
import { QUESTION_LIST_KEY } from './key';

export const useQuestionList = ({ page, type, product }: { page?: string; type?: string; product?: string }) => {
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  // const [page, setPage] = useState();
  const { data, isLoading, isError, refetch } = useQuery<BaseResponseDTO<QuestionListGetResponseDTO>, AxiosError>(
    QUESTION_LIST_KEY({ page, type, product }),
    getQuestionList({ page, type, product }),
    // API('/auth', { method: 'get' }),
    {
      retry: false,
    },
  );
  // const { result } = data as BaseResponseDTO<MyOrderListGetResponseDTO>;
  useEffect(() => {
    if (!data) return;
    if (!data.result) return;
    const { result } = data;
    const { total_count, questions } = result;
    setQuestionList(questions);
    setTotalCount(total_count);
    if (!total_count) setTotalCount(0);
  }, [data]);

  return {
    questionList,
    totalCount,
    isError,
    isLoading,
    refetch,
  };
};
