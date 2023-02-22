import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ModeType, PageNationButtonItemType } from '../../../types/common/propsTypes';
import { Question } from '../../../types/model/question';
import { Header } from '../../foundations/Header';
import { PageNationBotton } from '../../foundations/PageNationButton';
import { QnAListItem } from '../../foundations/QnAListItem';
import { LayOut } from '../../layout';
import { QnAForm } from '../../modules/QnAWriteCard';

interface Props {
  mode: ModeType;
  questions: Omit<Question, 'password' | 'contents'>[];
  totalCount: number;
}
export const QATemplate = ({ mode, questions, totalCount }: Props) => {
  const [write, setWrite] = useState(false);
  const [pageList, setPageList] = useState<PageNationButtonItemType[]>([]);
  const router = useRouter();
  const { page } = router.query as { page?: string };
  useEffect(() => {
    if (totalCount)
      setPageList(
        Array(Math.ceil(totalCount / 20))
          .fill(0)
          .map((_, i) => ({ id: String(i + 1), title: String(i + 1) })),
      );
    console.log(totalCount);
  }, [totalCount]);
  const buttonHandler = useCallback(() => {
    setWrite(!write);
  }, [write]);

  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      {!write ? (
        <>
          <Header
            mode={mode}
            label="QA"
            button_label="글쓰기"
            button_location="right"
            button_onClick={buttonHandler}
            button_size="xsmall"
          />
          {questions && questions.map((question, i) => <QnAListItem mode={mode} key={i} question={question} />)}
        </>
      ) : (
        <>
          <Header mode={mode} label="QA" button_label="취소" button_onClick={buttonHandler} button_size="xsmall" />
          <QnAForm mode={mode} size="medium"></QnAForm>
        </>
      )}
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
