import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType, PageNationButtonItemType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { Header } from '../../foundations/Header';
import { PageNationBotton } from '../../foundations/PageNationButton';
import { QnAListItem } from '../../foundations/QnAListItem';
import { LayOut } from '../../_layout/layout';

interface Props {
  mode: ModeType;
  questions: Omit<Question, 'password' | 'contents'>[];
  totalCount: number;
  buttonHandler?: () => void;
  page?: string;
}
export const QATemplate = ({ mode, questions, totalCount, buttonHandler, page }: Props) => {
  const [pageList, setPageList] = useState<PageNationButtonItemType[]>([]);

  useEffect(() => {
    if (totalCount)
      setPageList(
        Array(Math.ceil(totalCount / 20))
          .fill(0)
          .map((_, i) => ({ id: String(i + 1), title: String(i + 1) })),
      );
  }, [totalCount]);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header
        mode={mode}
        label="QA"
        button_label="글쓰기"
        button_location="right"
        button_onClick={buttonHandler}
        button_size="xsmall"
      />
      {questions &&
        questions.map((question) => (
          <Link key={question.question_id} href={`/qa/${question.question_id}`}>
            <QnAListItem mode={mode} question={question} />{' '}
          </Link>
        ))}

      {totalCount > 0 && (
        <PageNationBox>
          <PageNationBotton items={pageList} mode={mode} size="medium" now_id={page} url={`/qa?page=`} />
        </PageNationBox>
      )}
    </LayOut>
  );
};
const PageNationBox = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
