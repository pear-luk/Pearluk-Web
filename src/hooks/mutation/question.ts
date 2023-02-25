import { useMutation, useQueryClient } from 'react-query';
import { createQuestion, getSecretQuestion, uploadQuestionImgs } from './../API/question/index';
import { QUESTION_DETAIL_KEY, QUESTION_KEY } from './../queries/key/index';

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(createQuestion(), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(QUESTION_KEY);
    },
  });
};

export const useSecretQuestion = (question_id: string) => {
  const queryClient = useQueryClient();

  return useMutation(getSecretQuestion(question_id), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(QUESTION_DETAIL_KEY(question_id));
    },
  });
};

export const useUploadQuestionImg = (question_id: string) => {
  const queryClient = useQueryClient();

  return useMutation(uploadQuestionImgs(question_id), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(QUESTION_DETAIL_KEY(question_id));
    },
  });
};
