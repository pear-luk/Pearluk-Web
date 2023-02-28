import React, { useState } from 'react';
import styled from 'styled-components';
import { useSecretQuestion } from '../../../hooks/mutation/question';
import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { Button } from '../../elements/Button';
import { InputText } from '../../elements/InputText';
import { Label } from '../../elements/Label';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../_layout/layout';
import { QnADeatailTemplate } from '../QnADetailTemplate';

interface Props {
  mode: ModeType;
  // question: Question;
  question_id: string;
}
export const QnADetailSecretTemplate = ({ mode, question_id }: Props) => {
  const [password, setPassword] = useState('');
  const [question, setQuestion] = useState<Question>();
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setPassword(e.target.value);
  };
  const { mutateAsync } = useSecretQuestion(question_id);
  const submitPassword = () => {
    mutateAsync({ password }).then(({ result }) => setQuestion(result));
  };

  if (question) {
    return <QnADeatailTemplate mode={mode} question={question} />;
  }

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="QA" />
      <InputBox>
        <Label mode={mode} label="PASSWORD" />
        <InputText mode={mode} input_width="small" value={password} onChange={inputChangeHandler} />
        <Box>
          <Button color={mode === 'dark' ? 'yellow' : 'black'} label={'OK'} onClick={submitPassword} />
        </Box>
      </InputBox>
    </LayOut>
  );
};

const InputBox = styled.div`
  margin-top: 6.4rem;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 99999;
`;

const Box = styled.div`
  margin-top: 0.8rem;
`;
