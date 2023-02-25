import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LayOut } from '../../components/layout';
import { ProductTemplate } from '../../components/prototypes/ProductTemplate';
import { useProduct } from '../../hooks/queries/productQuery';

import { ModeType } from '../../types/common/propsTypes';
import { Product } from '../../types/model/product';

function ProductDetail() {
  // mode, icon
  const [mode] = useState<ModeType>('dark');
  const router = useRouter();

  const { product_id } = router.query;
  const { product, isProductError, isProductLoading } = useProduct({ product_id });
  if (isProductLoading) return <LayOut mode={mode} />;
  if (isProductError) return <LayOut mode={mode} />;
  return <ProductTemplate mode={mode} product={product as Product} quetionList={[]} />;
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
