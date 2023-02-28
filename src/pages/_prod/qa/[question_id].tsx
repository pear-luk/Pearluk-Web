import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LayOut } from '../../../components/layout/layout';
import { QnADetailSecretTemplate } from '../../../components/prototypes/QnADetailSecretTemplate';
import { QnADeatailTemplate } from '../../../components/prototypes/QnADetailTemplate';
import { useQuestionDetail } from '../../../hooks/queries/questionQuery';

import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';

function QuestionDetail() {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const router = useRouter();

  const { question_id } = router.query;

  const { question, isError, isLoading } = useQuestionDetail(question_id as string);
  useEffect(() => {
    console.log(question);
  }, [question]);
  if (isLoading || question === undefined) return <LayOut mode={mode} />;
  if (isError) return <LayOut mode={mode} />;

  return question.secret_mode === 0 ? (
    <QnADeatailTemplate mode={mode} question={question as Question} />
  ) : (
    <QnADetailSecretTemplate mode={mode} question_id={question_id as string} />
  );
}

export default QuestionDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { question_id } = query;
  return {
    props: {
      question_id,
    },
  };
};
