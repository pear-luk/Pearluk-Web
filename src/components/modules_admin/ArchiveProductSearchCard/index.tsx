import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
import { ulid } from 'ulid';
import { useAdminModal } from '../../../hooks/util/useAdminModal';
import { useModal } from '../../../hooks/util/useModal';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ModeType, PageNationButtonItemType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product, ProductImg } from '../../../types/model/product';
import { ProductCreateRequestDTO, ProductUpdateManyRequestDTO } from '../../../types/request/product';
import { Button } from '../../elements/Button';
import { InputLabel } from '../../foundations/InputLabel';
import { PageNationBotton } from '../../foundations/PageNationButton';
import { ProductCheckedCard } from '../ProductCheckedCard';
import { ProductForm } from '../ProductFormCard';
import { ProductListCard_Admin } from '../ProductListCard';
{
  /* <BoxCheck>
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
</BoxCheck> */
}
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
  updateManyProduct?: UseMutateAsyncFunction<BaseResponseDTO<Product[]>, unknown, ProductUpdateManyRequestDTO, unknown>;
  updateProduct?: UseMutateAsyncFunction<
    BaseResponseDTO<Product>,
    unknown,
    {
      product_id: string;
      mutationData: Partial<Product>;
    },
    unknown
  >;
  productTotalCount?: number;
  page?: string | string[] | undefined;

  storybook?: boolean;
}
export const ArchiveProductSearchCard = ({
  mode,
  archiveList,
  categoryList,
  productList,
  createProduct,
  uploadProductImgs,
  updateManyProduct,
  updateProduct,

  storybook = false,
  productTotalCount,

  page,
}: Props) => {
  const { push, isReady, query } = useRouter();
  const [productName, setProductName] = useState('');

  const [archiveId, setArchiveId] = useState<string>('all');
  const [parentCategoryId, setParentCategoryId] = useState<string>('all');
  const [childCategoryId, setChildCategoryId] = useState<string>('all');
  const [parentCategory, setParentCategory] = useState<Category | 'all' | 'off' | undefined>('all');
  const [childCategory, setChildCategory] = useState<Category | 'all' | 'off' | undefined>('all');

  const [checkedProductList, setCheckedProductList] = useState<Product[]>([]);
  const [pageList, setPageList] = useState<PageNationButtonItemType[]>([]);

  useEffect(() => {
    if (query.search) {
      setProductName(query.search);
    }
    if (query.archive) {
      console.log(query.archive);

      setArchiveId(query.archive as string);
    }
    if (query.parentCategory) {
      console.log(query.parentCategory);
      setParentCategory(categoryList.find((category) => query.parentCategory === category.category_id));
      setParentCategoryId(query.parentCategory as string);
    }
    if (query.childCategory) {
      console.log(query.childCategory);

      if (!query.parentCategory || query.parentCategory === 'all') {
        setChildCategoryId('all');
      } else setChildCategoryId(query.childCategory as string);
    }
  }, [query.archive, query.parentCategory, query.childCategory, query.search, categoryList]);
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
        productList={productList}
        storybook={storybook}
      />
    ),
  });
  const productNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) setProductName(e.target.value);
  };
  const archiveSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArchiveId(e.target.value);
    push({
      pathname: '/archives',
      query: {
        search: productName,
        archive: e.target.value,
        parentCategory: parentCategoryId,
        childCategory: childCategoryId,
      },
    });
  };
  const parentCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setParentCategory('all');
      setParentCategoryId('all');
      setChildCategory('all');
      setChildCategoryId('all');
      push({
        pathname: '/archives',
        query: {
          search: productName,
          archive: archiveId,
          parentCategory: 'all',
          childCategory: childCategoryId,
        },
      });
    }
    if (categoryList && e.target.value !== 'all') {
      setParentCategory(categoryList.find((category) => category.category_id === e.target.value));
      setParentCategoryId(e.target.value);
      isReady &&
        push({
          pathname: '/archives',
          query: {
            search: productName,
            archive: archiveId,
            parentCategory: e.target.value,
            childCategory: childCategoryId,
          },
        });
    }
  };
  const childCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'all') {
      setChildCategory('all');
      setChildCategoryId('all');
      push({
        pathname: '/archives',
        query: {
          search: productName,
          archive: archiveId,
          parentCategory: parentCategoryId,
          childCategory: e.target.value,
        },
      });
    }
    if (
      typeof parentCategory === 'object' &&
      parentCategory.child_categories &&
      categoryList &&
      e.target.value !== 'all'
    ) {
      setChildCategory(parentCategory.child_categories.find((category) => category.category_id === e.target.value));
      setChildCategoryId(e.target.value);
      push({
        pathname: '/archives',
        query: {
          search: productName,
          archive: archiveId,
          parentCategory: parentCategoryId,
          childCategory: e.target.value,
        },
      });
    }
  };
  const searchButtonHandler = () => {
    push({
      pathname: '/archives',
      query: {
        search: productName,
        archive: archiveId,
        parentCategory: parentCategoryId,
        childCategory: childCategoryId,
      },
    });
  };
  const resetButtonHandler = () => {
    setProductName('');
    push({
      pathname: '/archives',
      query: {
        archive: 'all',
        parentCategory: 'all',
        childCategory: 'all',
      },
    });
    setArchiveId('all');
    setParentCategory('all');
    setChildCategory('all');
  };
  useEffect(() => {
    if (productTotalCount)
      setPageList(
        Array(Math.ceil(productTotalCount / 10))
          .fill(0)
          .map((_, i) => ({ id: String(i + 1), title: String(i + 1) })),
      );
  }, [productTotalCount]);

  // useEffect(() => {
  //   console.log({
  //     archive: archiveId,
  //     parentCategory: parentCategoryId,
  //     childCategory: childCategoryId,
  //   });
  //   push({
  //     pathname: '/archives',
  //     query: {
  //       archive: archiveId,
  //       parentCategory: parentCategoryId,
  //       childCategory: childCategoryId,
  //     },
  //   });
  // }, [archiveId, parentCategoryId, childCategoryId]);

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

      <Box>
        아카이브
        <Select key={ulid()} name="archive" id="archive" onChange={archiveSelectOnChange} defaultValue={archiveId}>
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
        <Select
          key={ulid()}
          name="parent_category"
          id="parent_category"
          onChange={parentCategorySelectOnChange}
          defaultValue={parentCategoryId}>
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
        <Select
          key={ulid()}
          name="child_category"
          id="child_category"
          onChange={childCategorySelectOnChange}
          defaultValue={childCategoryId}>
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
          <Button label="search" size="huge" onClick={searchButtonHandler} />
        </ButtonItem>
        <ButtonItem>
          <Button label="reset" size="huge" onClick={resetButtonHandler} />
        </ButtonItem>
      </ButtonBox>
      <ButtonBox>
        <ButtonItem>
          <Button label="ADD PRODUCT" size="huge" onClick={productFormOpen} />
        </ButtonItem>
      </ButtonBox>
      <ProductBox>
        <ProductListCard_Admin
          mode="white"
          archiveList={archiveList}
          categoryList={categoryList}
          productList={productList}
          checkedProductList={checkedProductList}
          setCheckedProductList={setCheckedProductList}
          updateProduct={updateProduct}
          uploadProductImgs={uploadProductImgs}
        />{' '}
        {checkedProductList.length > 0 && (
          <CheckedBox>
            <ProductCheckedCard
              mode={mode === 'dark' ? 'white' : 'dark'} //
              archiveList={archiveList}
              categoryList={categoryList}
              openSuccessModal={openSuccessModal}
              checkedProductList={checkedProductList}
              setCheckedProductList={setCheckedProductList}
              updateManyProduct={updateManyProduct}
            />
          </CheckedBox>
        )}
      </ProductBox>
      <ButtonBox>
        <PageNationBotton
          size="xlarge"
          mode={mode}
          items={pageList}
          url={`/archives?search=${productName}&archive=${archiveId}&parentCategory=${parentCategoryId}&childCategory=${childCategoryId}&page=`}
          now_id={page as string}
        />
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

const CheckedBox = styled.div`
  background-color: black;

  position: absolute;
  padding: 1.6rem;
  left: -100%;
  bottom: 0;
`;
