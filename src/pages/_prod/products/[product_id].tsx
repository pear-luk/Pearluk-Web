import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ProductTemplate } from '../../../components/prototypes/ProductTemplate';
import { LayOut } from '../../../components/_layout/layout';
import { useProduct } from '../../../hooks/queries/productQuery';
import { useQuestionList } from '../../../hooks/queries/questionQuery';

import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';

function ProductDetail() {
  // mode, icon
  const [mode] = useState<ModeType>('dark');
  const router = useRouter();

  const { product_id } = router.query;
  const { product, isProductError, isProductLoading } = useProduct({ product_id });
  const { questionList } = useQuestionList({ product: product_id as string });

  if (isProductLoading) return <LayOut mode={mode} />;
  if (isProductError) return <LayOut mode={mode} />;

  return <ProductTemplate mode={mode} product={product as Product} quetionList={questionList} />;
}

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { product_id } = query;
  return {
    props: {
      product_id,
    },
  };
};
