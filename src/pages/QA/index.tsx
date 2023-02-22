import { useRouter } from 'next/router';
import { useState } from 'react';
import { QATemplate } from '../../components/prototypes/QnAListTemplate';

import { useQuestionList } from '../../hooks/queries/questionQuery';
import { ModeType } from '../../types/common/propsTypes';

// interface Props {}
function QA() {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const router = useRouter();
  const { page } = router.query;

  // const [questions, setquestions] = useState<Omit<Question, 'password' | 'contents'>[]>([]);
  const { questionList, totalCount } = useQuestionList({ page: page as string, type: '0' });
  //test

  return <QATemplate mode={mode} questions={questionList} totalCount={totalCount} />;
}

export default QA;
