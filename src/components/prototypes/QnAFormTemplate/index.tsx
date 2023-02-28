import { useState } from 'react';
import { useCreateQuestion, useUploadQuestionImg } from '../../../hooks/mutation/question';
import { ModeType } from '../../../types/common/propsTypes';
import { Header } from '../../foundations/Header';
import { QnAForm } from '../../modules/QnAWriteCard';
import { LayOut } from '../../_layout/layout';

interface Props {
  mode: ModeType;
  buttonHandler?: () => void;
}
export const QnAFormTemplate = ({ mode, buttonHandler }: Props) => {
  const [questionId, setQuestionId] = useState('');
  const { mutateAsync: submit } = useCreateQuestion();
  const { mutateAsync: uploadImgs } = useUploadQuestionImg(questionId);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="QA" button_label="취소" button_onClick={buttonHandler} button_size="xsmall" />
      <QnAForm mode={mode} size="medium" submit={submit} setQuestionId={setQuestionId} uploadImgs={uploadImgs} />
    </LayOut>
  );
};
