import { Dispatch, SetStateAction, useState } from 'react';
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
  uploadProductImgs?: UseMutateAsyncFunction<BaseResponseDTO<ProductImg[]>, unknown, FormData, unknown>;
  setProductId?: Dispatch<SetStateAction<string>>;
}
export const ArchiveProductSearchCard = ({
  mode,
  archiveList,
  categoryList,
  productList,
  createProduct,
  uploadProductImgs,
  setProductId,
}: Props) => {
  const [parentCategory, setParentCategory] = useState<Category | 'all' | 'off'>();
  const [productName, setProductName] = useState('');

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
        setProductId={setProductId}
        createProduct={createProduct}
        uploadProductImgs={uploadProductImgs}
        productFormClose={() => productFormClose()}
        openErrorModal={openErrorModal}
        openSuccessModal={openSuccessModal}
      />
    ),
  });

  const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParentCategory(categoryList.find((category) => category.category_id === e.target.value));
  };
  const productNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setProductName(e.target.value);
  };

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
        대 카테고리
        <Select name="parent_category" id="parent_category" onChange={selectOnChange}>
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
      <Box>
        소 카테고리
        <Select name="child_category" id="child_category">
          <option value={'선택'}>선택</option>
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
        <ProductListCard_Admin mode="white" productList={productList} />
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
