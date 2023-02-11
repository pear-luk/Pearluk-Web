import { useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
import { Question } from '../../../types/model/question';
import { Button } from '../../elements/Button';
import { Text } from '../../elements/Text';
import { Header } from '../../foundations/Header';
import { ProductItem } from '../../foundations/ProductItem';
import { QnAListItem } from '../../foundations/QnAListItem';
import { LayOut } from '../../layout';
import { QnAForm } from '../../modules/QnAWriteCard';
interface Props {
  mode: ModeType;
  product: Product;
  quetionList: Omit<Question, 'password' | 'contents'>[];
}

export const ProductTemplate = ({ mode, product, quetionList }: Props) => {
  const [write, setWrite] = useState(false);
  //test

  const writeButtonHandler = () => {
    setWrite(!write);
  };
  return (
    <LayOut mode={mode} contentSize="large">
      <>
        <ProductItem mode={mode} product={product} slide={true}></ProductItem>
        <Text mode={mode} size="large" contents={product.introduce} />
        <ButtonBox>
          <Button size="xxlarge" color={mode === 'dark' ? 'yellow' : 'black'} label="CART" />
          <Button size="xxlarge" color={mode === 'dark' ? 'yellow' : 'black'} label="BUY" />
        </ButtonBox>
      </>
      <>
        <Header
          size="large"
          mode={mode}
          label="QA"
          header_type="left"
          button_label={write ? '취소' : '글쓰기'}
          button_size="xsmall"
          button_onClick={writeButtonHandler}
        />
        {write ? (
          <QnAForm mode={mode} size="large" />
        ) : (
          quetionList &&
          quetionList.map((question) => {
            return <QnAListItem size="large" key={question.question_id} mode={mode} question={question} />;
          })
        )}
      </>
    </LayOut>
  );
};

const ButtonBox = styled.div`
  margin-top: 6.4rem;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
