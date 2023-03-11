import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Product } from '../../../types/model/product';
import { ProductListItem_Admin } from '../../foundations_admin/ProductListItem';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  productList: Product[];
  setProductList?: Dispatch<SetStateAction<Product[]>>;
  buttonHandler?: ({ product_id }: Pick<Product, 'product_id'>) => {
    updateCartProduct: (updateCount: number) => void;
    deleteCartProduct: () => void;
  };
  checkedProductList?: Product[];
  setCheckedProductList?: React.Dispatch<React.SetStateAction<Product[]>>;
  storybook?: boolean;
}

export const ProductListCard_Admin = ({
  mode,
  size = 'xlarge',
  productList,
  buttonHandler,
  // setProductList,
  checkedProductList,
  setCheckedProductList,
}: Props) => {
  const deleteButtonHandler = (cart_product_id: string) => () => {
    // setProductList && setProductList(productList.filter((product) => product.product_id !== cart_product_id));
    // buttonHandler && buttonHandler({ cart_product_id }).deleteCartProduct();
  };
  const checkProductHandler = (product: Product) => () => {
    const checked =
      checkedProductList &&
      checkedProductList.find((checkedProduct) => checkedProduct.product_id === product.product_id);

    if (checked) {
      setCheckedProductList &&
        setCheckedProductList(
          checkedProductList.filter((checkedProduct) => checkedProduct.product_id !== product.product_id),
        );
    } else {
      setCheckedProductList && checkedProductList && setCheckedProductList([...checkedProductList, product]);
    }
  };

  return (
    <Container mode={mode} size={size}>
      {productList &&
        productList.map((product) => {
          const { product_id } = product;
          return (
            <ProductBox mode={mode} key={product_id}>
              <ProductListItem_Admin
                mode={mode}
                size={size}
                product={product}
                checkedProductList={checkedProductList}
                checkBox_onChange={checkProductHandler(product)}
              />
            </ProductBox>
          );
        })}
    </Container>
  );
};
const Container = styled.div<Pick<Props, 'mode' | 'size'>>`
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ theme, size }) => size && theme.size.width[size]};
`;

const ProductBox = styled.div<{ mode: ModeType }>`
  padding: 1.6rem 0;
  border-bottom: 1px solid
    ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
