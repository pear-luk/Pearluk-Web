import { useEffect, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
import { useAdminModal } from '../../../hooks/util/useAdminModal';
import { useModal } from '../../../hooks/util/useModal';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product, ProductImg } from '../../../types/model/product';
import { ProductCreateRequestDTO } from '../../../types/request/product';
import { Button } from '../../elements/Button';
import { CheckBox } from '../../elements/CheckBox';
import { InputLabel } from '../../foundations/InputLabel';
import { ProductForm } from '../ProductFormCard';
import { ProductListCard_Admin } from '../ProductListCard';

type Status = Record<string, { title: string; number: number }>;

interface Props {
  mode: ModeType;
  status: Status;
  archiveList: Archive[];
  categoryList: Category[];
  productList: Product[];

  createProduct?: UseMutateAsyncFunction<BaseResponseDTO<Product>, unknown, ProductCreateRequestDTO, unknown>;
  uploadProductImgs?: UseMutateAsyncFunction<
    BaseResponseDTO<ProductImg[]>,
    unknown,
    {
      product_id: string;
      mutationData: FormData;
    },
    unknown
  >;

  storybook?: boolean;
}
export const ArchiveProductSearchCard = ({
  mode,
  archiveList,
  categoryList,
  productList,
  createProduct,
  uploadProductImgs,
  storybook = false,
}: Props) => {
  const [archiveId, setArchiveId] = useState<string>('all');
  const [parentCategory, setParentCategory] = useState<Category | 'all' | 'off' | undefined>('all');
  const [childCategory, setChildCategory] = useState<Category | 'all' | 'off' | undefined>('all');
  const [productName, setProductName] = useState('');
  const [productListDup, setProductListDup] = useState<Product[]>([]);

  const {
    Modal: SuccessModal,
    close: closeSuccessModal,
    open: openSuccessModal,
  } = useModal({
    OK_Button: true,
    message: 'SUCCEX',
    mode: mode === 'dark' ? 'white' : 'dark',
    OK_Button_onClick: (e) => {
      e.preventDefault();
      e.isPropagationStopped();
      closeSuccessModal();
      productFormClose && productFormClose();
    },
  });

  const {
    Modal: ErrorModal,
    close: closeErrorModal,
    open: openErrorModal,
  } = useModal({
    OK_Button: true,
    message: 'ERROR',
    mode: mode === 'dark' ? 'white' : 'dark',
    OK_Button_onClick: (e) => {
      e.preventDefault();
      e.isPropagationStopped();
      closeSuccessModal();
      closeErrorModal();
    },
  });
  const {
    Modal: ProductFormModal,
    open: productFormOpen,
    close: productFormClose,
  } = useAdminModal({
    mode: mode,

    Content: (
      <ProductForm
        mode={mode}
        NO_Button_onClick={() => productFormClose()}
        archiveList={archiveList}
        categoryList={categoryList}
        createProduct={createProduct}
        uploadProductImgs={uploadProductImgs}
        productFormClose={() => productFormClose()}
        openErrorModal={openErrorModal}
        openSuccessModal={openSuccessModal}
        productList={productListDup}
        setProductList={setProductListDup}
        storybook={storybook}
      />
    ),
  });
  const archiveSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArchiveId(e.target.value);
  };
  const parentCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setParentCategory('all');
    }
    if (categoryList && e.target.value !== 'all') {
      setParentCategory(categoryList.find((category) => category.category_id === e.target.value));
    }
  };
  const childCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setChildCategory('all');
    }
    if (
      typeof parentCategory === 'object' &&
      parentCategory.child_categories &&
      categoryList &&
      e.target.value !== 'all'
    ) {
      setChildCategory(parentCategory.child_categories.find((category) => category.category_id === e.target.value));
    }
  };
  const productNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setProductName(e.target.value);
  };

  useEffect(() => {
    setProductListDup &&
      setProductListDup(
        productList
          .filter((product) => {
            if (!productName) return true;
            return product.name.includes(productName);
          })
          .filter((product) => {
            if (archiveId === 'all') return true;
            return product.archive?.archive_id === archiveId;
          })
          .filter((product) => {
            if (parentCategory === 'all') {
              console.log(parentCategory);
              return true;
            }
            if (typeof parentCategory === 'object') {
              return product.category?.parent_category_id === parentCategory.category_id;
            }
          })
          .filter((product) => {
            if (childCategory === 'all') {
              console.log(childCategory);
              return true;
            }
            if (typeof childCategory === 'object') return product.category?.category_id === childCategory.category_id;
          }),
      );
    console.log(productList);
  }, [productName, productList, archiveId, parentCategory, childCategory]);

  return (
    <Container>
      <ProductFormModal />
      <ErrorModal />
      <SuccessModal />
      <Box>
        <p>검색</p>
        <div>
          <InputLabel
            label="상품명"
            mode="white"
            label_type="left"
            input_width="medium"
            value={productName}
            onChange={productNameHandler}
          />
        </div>
      </Box>
      <BoxCheck>
        <p>판매상태</p>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" /> s
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
      </BoxCheck>
      <Box>
        아카이브
        <Select name="archive" id="archive" onChange={archiveSelectOnChange}>
          <option value={'all'}>all</option>
          {archiveList &&
            archiveList.map((archive) => (
              <option key={archive.archive_id} value={archive.archive_id}>
                {archive.title}
              </option>
            ))}
        </Select>
      </Box>
      <Box>
        대 카테고리
        <Select name="parent_category" id="parent_category" onChange={parentCategorySelectOnChange}>
          <option value={'all'}>all</option>
          {categoryList &&
            categoryList.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            ))}
        </Select>
      </Box>
      <Box>
        소 카테고리
        <Select name="child_category" id="child_category" onChange={childCategorySelectOnChange}>
          <option value={'all'}>all</option>
          {parentCategory &&
            parentCategory !== 'all' &&
            parentCategory !== 'off' &&
            parentCategory.child_categories &&
            parentCategory.child_categories.map((category) => {
              return (
                <option key={category.category_id} value={category.category_id}>
                  {category.name}
                </option>
              );
            })}
        </Select>
      </Box>
      <ButtonBox>
        <ButtonItem>
          <Button label="search" size="huge" />
        </ButtonItem>
        <ButtonItem>
          <Button label="reset" size="huge" />
        </ButtonItem>
      </ButtonBox>
      <ButtonBox>
        <ButtonItem>
          <Button label="ADD PRODUCT" size="huge" onClick={productFormOpen} />
        </ButtonItem>
      </ButtonBox>
      <ProductBox>
        <ProductListCard_Admin mode="white" productList={productListDup} />
      </ProductBox>

      <BoxCheck>
        <p>판매상태</p>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
        <div>
          판매대기
          <CheckItem>
            <CheckBox mode="white" />
          </CheckItem>
        </div>
      </BoxCheck>
      <Box>
        카테고리
        <Select name="category" id="adf">
          <option value={'all'}>all</option>
          {categoryList &&
            categoryList.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            ))}
          <option value={'sale'}>sale</option>
        </Select>
      </Box>
      <ButtonBox>
        <ButtonItem>
          <Button label="SAVE" size="huge" />
        </ButtonItem>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: fit-content;
  padding: 3.2rem 2.4rem;
  border: 1px solid black;

  min-width: 50.4rem;
  row-gap: 1.6rem;
  height: fit-content;
`;

const Box = styled.div`
  display: flex;
  justify-items: left;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  align-items: center;
  justify-content: space-between;
`;

const BoxCheck = styled(Box)`
  margin-bottom: 1.6rem;

  text-align: center;

  align-items: start;
`;

const CheckItem = styled.div`
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  border: 1px solid black;
  width: ${({ theme }) => theme.size.width.medium};
  height: ${({ theme }) => theme.size.space.base};

  background-color: transparent;
`;

const ProductBox = styled(Box)`
  overflow: scroll;
  min-height: 50vh;
  max-height: 50vh;
  align-items: flex-start;
`;

const ButtonBox = styled(Box)`
  justify-content: space-between;
`;
const ButtonItem = styled.div`
  margin: 0.4rem;
  width: 100%;
`;
