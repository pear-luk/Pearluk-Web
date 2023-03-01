import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { Header } from '../../foundations/Header';
import { AnswerCard } from '../../modules/AnswerCard';
import { QuestionCard } from '../../modules/QuestionCard';
import { LayOut } from '../../_layout/layout';

interface Props {
  mode: ModeType;
  question: Question;
}
export const QnADeatailTemplate = ({ mode, question }: Props) => {
  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="QA" />
      {
        // question
      }
      <QuestionCard mode={mode} question={question} />
      {
        // answers
      }
      {question &&
        question.answers?.map((answer) => (
          <AnswerBox key={answer.answer_id}>
            <AnswerCard answer={answer} mode={mode} />
          </AnswerBox>
        ))}
    </LayOut>
  );
};

const AnswerBox = styled.div`
  margin: 4.8rem 0;
`;
