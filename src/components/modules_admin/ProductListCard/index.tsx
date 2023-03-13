import { Dispatch, SetStateAction, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
import { useAdminModal } from '../../../hooks/util/useAdminModal';
import { Size } from '../../../styles/theme';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product, ProductImg } from '../../../types/model/product';
import { ProductListItem_Admin } from '../../foundations_admin/ProductListItem';
import { ProductEditCard } from '../ProductEditCard';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  archiveList: Archive[];
  categoryList: Category[];
  productList: Product[];
  setProductList?: Dispatch<SetStateAction<Product[]>>;
  buttonHandler?: ({ product_id }: Pick<Product, 'product_id'>) => {
    updateCartProduct: (updateCount: number) => void;
    deleteCartProduct: () => void;
  };
  checkedProductList?: Product[];
  setCheckedProductList?: React.Dispatch<React.SetStateAction<Product[]>>;
  uploadProductImgs?: UseMutateAsyncFunction<
    BaseResponseDTO<ProductImg[]>,
    unknown,
    {
      product_id: string;
      mutationData: FormData;
    },
    unknown
  >;
  updateProduct?: UseMutateAsyncFunction<
    BaseResponseDTO<Product>,
    unknown,
    {
      product_id: string;
      mutationData: Partial<Product>;
    },
    unknown
  >;

  storybook?: boolean;
}

export const ProductListCard_Admin = ({
  mode,
  size = 'xlarge',
  archiveList,
  categoryList,
  productList,
  buttonHandler,
  // setProductList,
  uploadProductImgs,
  updateProduct,
  checkedProductList,
  setCheckedProductList,
}: Props) => {
  const [selectProduct, setSelectProduct] = useState<Product>();

  const editButton = (product: Product) => () => {
    setSelectProduct(product);

    openProductEditForm();
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

  const {
    Modal: ProductEditModal,
    open: openProductEditForm,
    close: closeProductEditForm,
  } = useAdminModal({
    mode: mode,

    Content: (
      <ProductEditCard
        mode={mode}
        NO_Button_onClick={() => closeProductEditForm()}
        product={selectProduct as Product}
        archiveList={archiveList}
        categoryList={categoryList}
        uploadProductImgs={uploadProductImgs}
        updateProduct={updateProduct}
        // productEditClose={() => productEditClose()}
        // openErrorModal={openErrorModal}
        // openSuccessModal={openSuccessModal}
        // productList={productList}
        // storybook={storybook}
      />
    ),
  });

  return (
    <Container mode={mode} size={size}>
      <ProductEditModal />
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
                editButtonHandler={editButton(product)}
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
