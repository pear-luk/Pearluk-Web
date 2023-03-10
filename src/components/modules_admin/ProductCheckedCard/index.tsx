import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
import { useModal } from '../../../hooks/util/useModal';
import { Size } from '../../../styles/theme';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product } from '../../../types/model/product';
import { ProductUpdateManyRequestDTO } from '../../../types/request/product';
import { Button } from '../../elements/Button';
import { ProductCheckedItem } from '../../foundations_admin/ProductCheckedItem';

interface Props {
  mode: ModeType;
  size?: keyof Size['width'];
  setProductList?: Dispatch<SetStateAction<Product[]>>;
  buttonHandler?: ({ product_id }: Pick<Product, 'product_id'>) => {
    updateCartProduct: (updateCount: number) => void;
    deleteCartProduct: () => void;
  };
  archiveList?: Archive[];
  categoryList?: Category[];

  checkedProductList?: Product[];
  setCheckedProductList?: React.Dispatch<React.SetStateAction<Product[]>>;
  updateManyProduct?: UseMutateAsyncFunction<BaseResponseDTO<Product[]>, unknown, ProductUpdateManyRequestDTO, unknown>;

  openSuccessModal?: () => void;
  storybook?: boolean;
}

export const ProductCheckedCard = ({
  mode,
  size = 'xlarge',
  buttonHandler,
  archiveList,
  categoryList,
  checkedProductList,
  setCheckedProductList,
  openSuccessModal,
  updateManyProduct,
}: Props) => {
  const router = useRouter();
  const [archiveId, setArchiveId] = useState<string>('null');

  const [parentCategory, setParentCategory] = useState<Category | 'null' | undefined>('null');
  const [childCategory, setChildCategory] = useState<Category | 'null' | undefined>('null');

  const itemChechBoxHandler = (product: Product) => () => {
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
  const resetButtonHandler = () => {
    setCheckedProductList && setCheckedProductList([]);
  };

  const saveButtonHandler = () => {
    openUpdateModal();
  };
  const updateModalOkButtonHandler = () => {
    if (archiveId === 'null' && (childCategory === 'null' || childCategory === undefined)) {
      alert('??????????????????');
      closeUpdateModal();
      return;
    }

    updateManyProduct &&
      checkedProductList &&
      updateManyProduct({
        products: checkedProductList.map(({ product_id }) => ({ product_id })),
        archive_id: archiveId === 'null' ? undefined : archiveId,
        category_id: childCategory === 'null' || childCategory === undefined ? undefined : childCategory.category_id,
      })
        .then(() => {
          setCheckedProductList && setCheckedProductList([]);
          openSuccessModal && openSuccessModal();
          router.reload();
          closeUpdateModal();
        })
        .catch(() => {
          closeUpdateModal();
          return;
        });
  };

  const {
    Modal: UpdateModal,
    open: openUpdateModal,
    close: closeUpdateModal,
  } = useModal({
    message: 'REAL UPDATE?',
    mode,
    OK_Button: true,
    NO_Button: true,
    OK_Button_onClick: () => {
      updateModalOkButtonHandler();
    },
  });
  const archiveSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArchiveId(e.target.value);
  };
  const parentCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'null') {
      setParentCategory('null');
    }
    if (categoryList && e.target.value !== 'null') {
      setParentCategory(categoryList.find((category) => category.category_id === e.target.value));
    }
  };
  const childCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'null') {
      setChildCategory('null');
    }
    if (
      typeof parentCategory === 'object' &&
      parentCategory.child_categories &&
      categoryList &&
      e.target.value !== 'null'
    ) {
      setChildCategory(parentCategory.child_categories.find((category) => category.category_id === e.target.value));
    }
  };
  return (
    <Container mode={mode} size={size}>
      <UpdateModal />
      <CheckedBox>
        {checkedProductList &&
          checkedProductList.map((product) => {
            const { product_id } = product;
            return (
              <ProductBox mode={mode} key={product.product_id}>
                <ProductCheckedItem
                  mode={mode}
                  size={size}
                  product={product}
                  mutate={buttonHandler && buttonHandler({ product_id }).updateCartProduct}
                  checkedProductList={checkedProductList}
                  setCheckedProductList={setCheckedProductList}
                  checkBox_onChange={itemChechBoxHandler(product)}
                />
              </ProductBox>
            );
          })}
      </CheckedBox>
      <Box>
        ????????????
        <Select mode={mode} name="archive" id="archive" onChange={archiveSelectOnChange}>
          <option value={'null'}>null</option>
          {archiveList &&
            archiveList.map((archive) => (
              <option key={archive.archive_id} value={archive.archive_id}>
                {archive.title}
              </option>
            ))}
        </Select>
      </Box>
      <Box>
        ??? ????????????
        <Select mode={mode} name="parent_category" id="parent_category" onChange={parentCategorySelectOnChange}>
          <option value={'null'}>null</option>
          {categoryList &&
            categoryList.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.name}
              </option>
            ))}
        </Select>
      </Box>
      <Box>
        ??? ????????????
        <Select mode={mode} name="child_category" id="child_category" onChange={childCategorySelectOnChange}>
          <option value={'null'}>null</option>
          {parentCategory &&
            parentCategory !== 'null' &&
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
          <Button size="huge" label="reset" onClick={resetButtonHandler} color={mode === 'dark' ? 'yellow' : 'black'} />
        </ButtonItem>
        <ButtonItem>
          <Button size="huge" label="save" onClick={saveButtonHandler} color={mode === 'dark' ? 'yellow' : 'black'} />
        </ButtonItem>
      </ButtonBox>
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

const CheckedBox = styled.div`
  background-color: black;
  min-height: 50vh;
  max-height: 50vh;
  overflow: scroll;
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

const Select = styled.select<{ mode: ModeType }>`
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: ${({ theme }) => theme.size.width.medium};
  height: ${({ theme }) => theme.size.space.base};

  background-color: transparent;
`;
const ButtonBox = styled(Box)`
  padding: 1.6rem;
`;
const ButtonItem = styled.div`
  margin: 0.4rem;
  width: 100%;
`;
