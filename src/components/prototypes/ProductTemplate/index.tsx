import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAddCart } from '../../../hooks/mutation/cart';
import { useModal } from '../../../hooks/util/useModal';
import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
import { Question } from '../../../types/model/question';
import { Button } from '../../elements/Button';
import { Text } from '../../elements/Text';
import { Header } from '../../foundations/Header';
import { ProductItem } from '../../foundations/ProductItem';
import { QnAListItem } from '../../foundations/QnAListItem';
import { LayOut } from '../../layout/layout';
import { QnAForm } from '../../modules/QnAWriteCard';
interface Props {
  mode: ModeType;
  product: Product;
  quetionList: Omit<Question, 'password' | 'contents'>[];
}

export const ProductTemplate = ({ mode, product, quetionList }: Props) => {
  const [write, setWrite] = useState(false);
  const router = useRouter();
  const writeButtonHandler = () => {
    setWrite(!write);
  };

  const { mutate: mutateCartADD, isError } = useAddCart();

  const addOKbuttonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    closeAddModal();
    mutateCartADD({ product_id: product.product_id, count: 1 });
  };
  const existOKbuttonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    closeAddModal();
    router.push('/cart');
  };
  const {
    Modal: AddModal,
    open: openAddModal,
    close: closeAddModal,
  } = useModal({
    mode,
    message: 'PUT IN THE CART',
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: addOKbuttonHandler,
  });

  const { Modal: ExistModal, open: openExistModal } = useModal({
    mode,
    message: `ALREADY IN THE CART
GO CART?`,
    OK_Button: true,
    OK_Button_onClick: existOKbuttonHandler,
    NO_Button: true,
  });
  useEffect(() => {
    if (isError) openExistModal();
  }, [openExistModal, isError]);

  return (
    <LayOut mode={mode} contentSize="large">
      {<AddModal />}
      {<ExistModal />}
      <>
        <ProductItem mode={mode} product={product} slide={true}></ProductItem>
        <Text mode={mode} size="large" contents={product && product.introduce} />
        <ButtonBox>
          <Button size="xxlarge" color={mode === 'dark' ? 'yellow' : 'black'} label="CART" onClick={openAddModal} />
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
            return (
              <Link key={question.question_id} href={`/qa/${question.question_id}`}>
                <QnAListItem size="large" mode={mode} question={question} />;
              </Link>
            );
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
