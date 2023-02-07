import { useCallback, useEffect, useState } from 'react';

import { LayOut } from '../../components/layout';

import { Header } from '../../components/foundations/Header';
import { QnAListItem } from '../../components/foundations/QnAListItem';
import { QnAForm } from '../../components/modules/QnAWriteCard';
import { questionListItemMock_NoSecret_NoProduct } from '../../mock/question.mock';
import { ModeType } from '../../types/common/propsTypes';
import { Question } from '../../types/model/question';

function QA({ props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');

  const [qustions, setQustions] = useState<Omit<Question, 'password'>[]>([]);
  const [write, setWrite] = useState(false);
  //test
  useEffect(() => {
    setQustions([questionListItemMock_NoSecret_NoProduct]);
  }, []);
  const buttonHandler = useCallback(() => {
    setWrite(!write);
  }, [write]);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      {!write ? (
        <>
          <Header mode={mode} label="QA" button_label="글쓰기" button_onClick={buttonHandler} button_size="xsmall" />
          {qustions && qustions.map((qustion, i) => <QnAListItem mode={mode} key={i} qustion={qustion} />)}
        </>
      ) : (
        <>
          <Header mode={mode} label="QA" button_label="취소" button_onClick={buttonHandler} button_size="xsmall" />
          <QnAForm mode={mode} size="medium"></QnAForm>
        </>
      )}
    </LayOut>
  );
}

export default QA;
