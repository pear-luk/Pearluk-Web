import { useMutation, useQueryClient } from 'react-query';
import { getSecretQuestion } from './../API/question/index';
import { QUESTION_DETAIL_KEY } from './../queries/key/index';
export const useSecretQuestion = (question_id: string) => {
  const queryClient = useQueryClient();

  return useMutation(getSecretQuestion(question_id), {
    retry: false,

    onSuccess: () => {
      queryClient.invalidateQueries(QUESTION_DETAIL_KEY(question_id));
    },
  });
};
