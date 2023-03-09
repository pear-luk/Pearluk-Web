import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
import { ulid } from 'ulid';
import { FontWeight, Size } from '../../../styles/theme';
import { BaseResponseDTO } from '../../../types/common/baseResponse';
import { ButtonColorType, ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
import { Product, ProductImg } from '../../../types/model/product';
import { ProductCreateRequestDTO } from '../../../types/request/product';
import { Button } from '../../elements/Button';
import { Label } from '../../elements/Label';
import { TextArea } from '../../elements/Textarea';
import { InputLabel } from '../../foundations/InputLabel';

interface Props {
  mode: ModeType;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  OK_Button?: boolean;
  OK_Button_color?: ButtonColorType;
  OK_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

  NO_Button?: boolean;
  NO_Button_color?: ButtonColorType;
  NO_Button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

  categoryList?: Category[];
  archiveList?: Archive[];

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
  productList?: Product[];
  setProductList?: Dispatch<SetStateAction<Product[]>>;

  productFormClose?: () => void;
  openSuccessModal?: () => void;
  openErrorModal?: () => void;

  storybook?: boolean;
}
export const ProductForm = ({
  mode,

  input_width = 'medium',
  input_height = 'base',
  label_size = 'medium',
  label_weight = 'bold',

  OK_Button = true,
  NO_Button = true,
  NO_Button_onClick,
  archiveList,
  categoryList,
  createProduct,
  uploadProductImgs,
  productFormClose,
  openSuccessModal,
  openErrorModal,
  productList,
  setProductList,
  storybook = false,
}: Props) => {
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [archiveId, setArchiveId] = useState('null');
  const [parentCategory, setParentCategory] = useState<Category>();
  const [categoryId, setCategoryId] = useState<string>('null');

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setName(e.target.value);
    }
  }, []);
  const imageInpuOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.files);
    if (e.currentTarget.files) {
      const newImages = Array.from(e.currentTarget.files);

      const newImagesUrl = newImages.slice(0, 10 - images.length + 1).map((image) => URL?.createObjectURL(image));

      const nowImages = [...images, ...newImages];

      setImages(nowImages.slice(0, 10));
      setImageUrls([...imageUrls, ...newImagesUrl]);
    }
  };
  const parentCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    categoryList && setParentCategory(categoryList.find((category) => category.category_id === e.target.value));
  };
  const childCategorySelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(e.target.value);
  };
  const archiveSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArchiveId(e.target.value);
  };
  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      alert('숫자만 입력가능합니다');
      setQuantity('');
      return;
    }
    if (e.target) {
      setQuantity(e.target.value);
    }
  };
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      alert('숫자만 입력가능합니다');
      setPrice('');
      return;
    }
    if (e.target) {
      setPrice(e.target.value);
    }
  };
  const introduceOnChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value && setIntroduce(e.target.value);
    if (textareaRef.current) {
      if (!e.target.value) {
        textareaRef.current.style.height = '0px';
      }
    }
  }, []);

  const changeImageSequenceButton = (index: number, type: '+' | '-') => () => {
    if (type === '+' && index !== images.length - 1) {
      setImages([
        ...images.slice(0, index),
        ...images.slice(index + 1, index + 2),
        ...images.slice(index, index + 1),
        ...images.slice(index + 2),
      ]);
      setImageUrls([
        ...imageUrls.slice(0, index),
        ...imageUrls.slice(index + 1, index + 2),
        ...imageUrls.slice(index, index + 1),
        ...imageUrls.slice(index + 2),
      ]);
    }
    if (type === '-' && index !== 0) {
      setImages([
        ...images.slice(0, index - 1),
        ...images.slice(index, index + 1),
        ...images.slice(index - 1, index),
        ...images.slice(index + 1),
      ]);
      setImageUrls([
        ...imageUrls.slice(0, index - 1),
        ...imageUrls.slice(index, index + 1),
        ...imageUrls.slice(index - 1, index),
        ...imageUrls.slice(index + 1),
      ]);
    }
  };
  const deleteButton = (index: number) => () => {
    URL.revokeObjectURL(imageUrls[index]);
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
    setImageUrls([...imageUrls.slice(0, index), ...imageUrls.slice(index + 1)]);
  };
  const noButtonHandler = () => {
    imageUrls.forEach((url) => {
      URL.revokeObjectURL(url);
    });
    NO_Button_onClick && NO_Button_onClick();
  };
  const okButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    e.isPropagationStopped();

    if (name.length < 5) {
      alert('상품 이름은 5글자 이상으로 입력해주세요');
      return;
    }
    if (Number(price) < 1000) {
      alert('상품 가격은 1000원 이상으로 입력해주세요');
      return;
    }
    if (Number(quantity) < 1) {
      alert('상품 개수는 1개 이상으로 입력해주세요');
      return;
    }
    if (!categoryId) {
      alert('카테고리를 선택해주세요');
      return;
    }
    if (!archiveId) {
      alert('아카이브를 선택해주세요');
      return;
    }
    const newProduct: Omit<Product, 'product_id'> = {
      name,
      price: Number(price),
      quantity: Number(quantity),
      introduce,
      product_status: 1,
      category_id: categoryId,
      archive_id: archiveId,
    };

    if (storybook && productList && setProductList) {
      console.log('adsfasdfadfsdfs');
      const productsImg: ProductImg[] = imageUrls.map((url, i) => ({
        product_img_id: ulid(),
        product_id: ulid(),
        url,
        sequence: i + 1,
      }));

      setProductList([
        {
          ...newProduct,
          product_id: ulid(),
          imgs: productsImg,
        },
        ...productList,
      ]);
      productFormClose && productFormClose();
      openSuccessModal && openSuccessModal();
      return;
    }

    if (createProduct)
      createProduct(newProduct)
        .then(({ result }) => {
          if (result) {
            const { product_id } = result;
            return product_id;
          }
        })
        .then(async (product_id?: string) => {
          if (uploadProductImgs && images.length > 0 && product_id) {
            const formData = new FormData();
            images.forEach((img) => {
              formData.append('imgs', img);
            });
            await uploadProductImgs({ product_id, mutationData: formData });
          }
        })
        .then(() => {
          imageUrls.forEach((url) => {
            URL.revokeObjectURL(url);
          });
          setImageUrls([]);
          setImages([]);
          productFormClose && productFormClose();
          openSuccessModal && openSuccessModal();
        })
        .catch(() => {
          return;
        });
  };

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);
  useEffect(() => {
    console.log(introduce.length);
    if (textareaRef.current) {
      if (!introduce) {
        textareaRef.current.style.height = '0px';
        return;
      }
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [introduce]);

  // 메모리 누수 있음 . <- 이걸로쓰면
  // useEffect(() => {
  //   setImageUrls(
  //     images.map((image) => {
  //       const objectUrl = URL?.createObjectURL(image);

  //       return objectUrl;
  //     }),
  //   );
  // }, [images]);

  return (
    <Wrap>
      <Container mode={mode}>
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'}
          input_width="large"
          label="PRODUCT NAME"
          onChange={onChangeName}
          value={'' || name}
        />
        <Box>
          <Label mode={mode === 'dark' ? 'white' : 'dark'} label="PRODUCT'S ARCHIVE" />
          <Select
            mode={mode === 'dark' ? 'white' : 'dark'}
            name="archive"
            id="archivey"
            onChange={archiveSelectOnChange}>
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
          <Label mode={mode === 'dark' ? 'white' : 'dark'} label="PRODUCT'S PARENT CATEGORY" label_weight="bold" />
          <Select
            mode={mode === 'dark' ? 'white' : 'dark'}
            name="parent_category"
            id="parent_category"
            onChange={parentCategorySelectOnChange}>
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
          <Label mode={mode === 'dark' ? 'white' : 'dark'} label="PRODUCT'S CHILD CATEGORY" label_weight="bold" />
          <Select
            mode={mode === 'dark' ? 'white' : 'dark'}
            name="child_category"
            id="child_category"
            onChange={childCategorySelectOnChange}>
            <option value={'null'}>null</option>
            {parentCategory &&
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
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'}
          input_width="large"
          label="QUANTITY"
          label_weight="bold"
          onChange={onChangeQuantity}
          value={'' || quantity}
        />
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'}
          input_width="large"
          label="PRICE"
          label_weight="bold"
          onChange={onChangePrice}
          value={'' || price}
        />

        {images.length > 0 && (
          <>
            <Label label="PRODUCT'S THUMBNAIL" mode={mode === 'dark' ? 'white' : 'dark'} label_weight="bold" />
            <ImageListBox>
              <ImageBox>
                <Image
                  alt="이미지"
                  src={imageUrls[0]}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </ImageBox>
            </ImageListBox>
          </>
        )}

        <Label label="IMAGES" mode={mode === 'dark' ? 'white' : 'dark'} label_weight="bold" />
        <ImageListBox ref={imageAreaRef}>
          <Splide
            aria-label="new product imgs"
            options={{
              arrows: false,
              perMove: 1,
              perPage: images.length > 5 ? 5 : images.length > 0 ? images.length : 1,
            }}>
            {images.map((_, i) => {
              return (
                <SplideSlide key={'image' + i}>
                  <ImageBox>
                    <Image
                      alt="이미지"
                      src={imageUrls[i]}
                      fill
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                  </ImageBox>

                  <ImageButtonBox>
                    <SequenceButtonBox mode={mode === 'dark' ? 'white' : 'dark'}>
                      <Button label="<" size="large" onClick={changeImageSequenceButton(i, '-')} />
                      {i + 1}
                      <Button label=">" size="large" onClick={changeImageSequenceButton(i, '+')} />
                    </SequenceButtonBox>
                    <Button label="delete" size="large" onClick={deleteButton(i)} />
                  </ImageButtonBox>
                </SplideSlide>
              );
            })}
          </Splide>
        </ImageListBox>
        {images.length < 10 ? (
          <ImageLable mode={mode}>
            IMAGE ADD
            <Input multiple={true} type={'file'} onChange={imageInpuOnChange}></Input>
          </ImageLable>
        ) : (
          <></>
        )}

        <ContentInputBox>
          <Label label="INTRODUCE" mode={mode === 'dark' ? 'white' : 'dark'} label_weight="bold" />
          <TextArea
            mode={mode === 'dark' ? 'white' : 'dark'}
            size="large"
            ref={textareaRef}
            id="question_contents"
            onChange={introduceOnChange}></TextArea>
        </ContentInputBox>
        <ButtonBox>
          {OK_Button && (
            <Button
              size="medium"
              color={mode === 'dark' ? 'black' : 'yellow'}
              onClick={okButtonHandler}
              label="OK"></Button>
          )}
          {NO_Button && (
            <Button
              size="medium"
              color={mode === 'dark' ? 'grey' : 'dark_yellow'}
              onClick={noButtonHandler}
              label="NO"></Button>
          )}
        </ButtonBox>
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
`;
const Container = styled.div<Pick<Props, 'mode'>>`
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  padding: 1.6rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;

const ImageListBox = styled.div`
  width: 120rem;
  position: relative;
  height: fit-content;
  margin: 0 0.4rem;
  flex-basis: auto;
  flex: 0 0 auto;
  min-height: 40rem;
`;
const ImageLable = styled.label<Pick<Props, 'mode'>>`
  width: 34.2rem;
  height: 5rem;
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.grey.black};
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  font-size: 1.4rem;

  flex: 0 0 auto;
`;

const Input = styled.input.attrs({
  type: 'file',
  accept: 'image/jpg,image/png,image/jpeg,image/gif',
  Placeholder: '+',
})`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0px solid transparent;
`;

const ContentInputBox = styled.div``;

const ImageBox = styled.div`
  /* background-color: yellow; */

  display: block;
  width: auto;
  height: 36rem;
  position: relative;

  margin: 0 0.4rem;
  flex-basis: auto;

  overflow-x: scroll;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border: 1px solid ${({ theme }) => theme.color.yellow.yellow};
  }
`;

const ImageButtonBox = styled.div`
  padding: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select<Pick<Props, 'mode'>>`
  border: 1px solid ${({ theme }) => theme.color.yellow.yellow};
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  width: 34.2rem;

  height: ${({ theme }) => theme.size.space.base};

  background-color: transparent;
`;

const Box = styled.div`
  width: 34.2rem;
`;
const SequenceButtonBox = styled.div<Pick<Props, 'mode'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;
const ButtonBox = styled.div`
  margin-top: ${({ theme }) => theme.size.space.base};
  /* padding: 0 5.6rem; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 0.4rem;
  }
`;
