import { useRouter } from 'next/router';
import { useState } from 'react';
import { QnAFormTemplate } from '../../components/prototypes/QnAFormTemplate';
import { QATemplate } from '../../components/prototypes/QnAListTemplate';

import { useQuestionList } from '../../hooks/queries/questionQuery';
import { ModeType } from '../../types/common/propsTypes';

// interface Props {}
function QA() {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const router = useRouter();
  const { page } = router.query;
  const [write, setWrite] = useState(false);
  const buttonHandler = () => {
    setWrite(!write);
  };

  // const [questions, setquestions] = useState<Omit<Question, 'password' | 'contents'>[]>([]);
  const { questionList, totalCount } = useQuestionList({ page: page as string, type: '0' });
  //test

  return write ? (
    <QnAFormTemplate mode={mode} buttonHandler={buttonHandler} />
  ) : (
    <QATemplate
      mode={mode}
      questions={questionList}
      totalCount={totalCount}
      buttonHandler={buttonHandler}
      page={page as string}
    />
  );
}

export default QA;
