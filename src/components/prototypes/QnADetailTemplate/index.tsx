import { ModeType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../layout';
import { QuestionCard } from '../../modules/QuestionCard';

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
      {/* {question && question.answers?.map((answer) => <AnswerCard key={answer.answer_id} answer={answer} mode={mode} />)} */}
    </LayOut>
  );
};
