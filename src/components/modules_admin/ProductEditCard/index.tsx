import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { UseMutateAsyncFunction } from 'react-query';
import styled from 'styled-components';
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

/**
 * FILE 과 ProductImg가 섞여있음
 *
 * 보여주는 순서를 바꿀수 있어야함 (URL이 한곳에 있어야함.)
 *
 *
 *
 */

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

  product: Product;
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

interface ImageList {
  image: File | ProductImg;
  sequence: number;
}

interface ImageUrl {
  url: string;
  type: 'File' | 'ProductImg';
  index: number;
}
export const ProductEditCard = ({
  mode,

  OK_Button = true,
  NO_Button = true,
  NO_Button_onClick,

  product,
  archiveList,
  categoryList,
  // createProduct,
  // uploadProductImgs,
  productFormClose,
  openSuccessModal,
  // openErrorModal,
  productList,
  setProductList,
  storybook = false,
}: Props) => {
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState(product.name);
  const [images, setImages] = useState<ImageList[]>([]);
  const [newImages, setNewImages] = useState<ImageList[]>([]);

  const [imageUrls, setIamgeUrls] = useState<ImageUrl[]>([]);

  const [deletedImages, setDeletedImages] = useState<ImageList[]>([]);
  const [price, setPrice] = useState(String(product.price));
  const [quantity, setQuantity] = useState(String(product.quantity));
  const [introduce, setIntroduce] = useState(product.introduce);
  const [archiveId, setArchiveId] = useState(product.archive_id);
  const [parentCategory, setParentCategory] = useState<Category>();
  const [categoryId, setCategoryId] = useState<string>(product.category_id);

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setName(e.target.value);
    }
  }, []);
  const imageInpuOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.files);

    if (e.currentTarget.files) {
      const files = Array.from(e.currentTarget.files).slice(0, 10 - imageUrls.length + 1);

      const newImagesUrlList: ImageUrl[] = files.map((image, i) => ({
        url: URL.createObjectURL(image),
        type: 'File',
        index: newImages.length + i, // newImage어디에 존재해야하는지 알기위해.
      }));

      setNewImages([
        ...newImages,
        ...files.map((image, i) => ({
          image,
          sequence: imageUrls.length + i,
        })),
      ]);
      setIamgeUrls([...imageUrls, ...newImagesUrlList]);
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
  //작동은 하니 추후 리펙토링
  const changeImageSequenceButton = (index: number, type: '+' | '-') => () => {
    if (type === '+' && index !== imageUrls.length - 1) {
      setIamgeUrls([
        ...imageUrls.slice(0, index),
        imageUrls[index + 1],
        imageUrls[index],
        ...imageUrls.slice(index + 2),
      ]);
      if (imageUrls[index].type === 'File') {
        const fileIndex = imageUrls[index].index;
        setNewImages(
          newImages.map((image, i) => {
            if (fileIndex === i) {
              image.sequence += 1;
            }
            return image;
          }),
        );
      } else {
        const imageIndex = imageUrls[index].index;
        setImages(
          images.map((image, i) => {
            if (imageIndex === i) {
              image.sequence += 1;
            }
            return image;
          }),
        );
      }
      if (imageUrls[index + 1].type === 'File') {
        const fileIndex = imageUrls[index + 1].index;
        setNewImages(
          newImages.map((image, i) => {
            if (fileIndex === i) {
              image.sequence -= 1;
            }
            return image;
          }),
        );
      } else {
        const imageIndex = imageUrls[index + 1].index;
        setImages(
          images.map((image, i) => {
            if (imageIndex === i) {
              image.sequence -= 1;
            }
            return image;
          }),
        );
      }
    }
    if (type === '-' && index !== 0) {
      setIamgeUrls([
        ...imageUrls.slice(0, index - 1),
        imageUrls[index],
        imageUrls[index - 1],
        ...imageUrls.slice(index + 1),
      ]);

      if (imageUrls[index - 1].type === 'File') {
        const fileIndex = imageUrls[index - 1].index;
        setNewImages(
          newImages.map((image, i) => {
            if (fileIndex === i) {
              image.sequence += 1;
            }
            return image;
          }),
        );
      } else {
        const imageIndex = imageUrls[index - 1].index;
        setImages(
          images.map((image, i) => {
            if (imageIndex === i) {
              image.sequence += 1;
            }
            return image;
          }),
        );
      }
      if (imageUrls[index].type === 'File') {
        const fileIndex = imageUrls[index].index;
        setNewImages(
          newImages.map((image, i) => {
            if (fileIndex === i) {
              image.sequence -= 1;
            }
            return image;
          }),
        );
      } else {
        const imageIndex = imageUrls[index].index;
        setImages(
          images.map((image, i) => {
            if (imageIndex === i) {
              image.sequence -= 1;
            }
            return image;
          }),
        );
      }
    }
  };

  // index => 모든 이미지 값의 순서. === sequnce
  //작동은 하니 추후 리펙토링
  const deleteButton = useCallback(
    (index: number) => () => {
      if (imageUrls[index].type === 'ProductImg') {
        setDeletedImages([...deletedImages, images[imageUrls[index].index]]);
      }
      setNewImages(
        newImages
          .map((image) => {
            if (image.sequence > index) {
              image.sequence -= 1;
            }
            return image;
          })
          .filter((_, i) => {
            if (imageUrls[index].type === 'File') return imageUrls[index].index !== i;

            return true;
          }),
      );
      setImages(
        images
          .map((image) => {
            if (image.sequence > index) {
              image.sequence -= 1;
            }

            return image;
          })
          .filter((_, i) => {
            if (imageUrls[index].type === 'ProductImg') return imageUrls[index].index !== i;

            return true;
          }),
      );
      setIamgeUrls(
        imageUrls
          .map((imageUrl) => {
            if (imageUrl.index > index) {
              imageUrl.index -= 1;
            }
            return imageUrl;
          })
          .filter((_, i) => i !== index),
      );
    },

    [imageUrls, images, newImages, deletedImages],
  );

  const recoverButton = (index: number) => () => {
    const target = deletedImages[index];
    setDeletedImages(deletedImages.filter((_, i) => i !== index));
    setImages([...images, { ...target, sequence: imageUrls.length + 1 }]);
    setIamgeUrls([...imageUrls, { url: (target.image as ProductImg).url, type: 'ProductImg', index: images.length }]);
  };

  const noButtonHandler = (e: React.MouseEvent) => {
    NO_Button_onClick && NO_Button_onClick(e);
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

      productFormClose && productFormClose();
      openSuccessModal && openSuccessModal();
      return;
    }

    // if (createProduct)
    // createProduct(newProduct)
    //   .then(({ result }) => {
    //     if (result) {
    //       const { product_id } = result;
    //       return product_id;
    //     }
    //   })
    //   .then(async (product_id?: string) => {
    //     if (uploadProductImgs && images.length > 0 && product_id) {
    //       const formData = new FormData();
    //       images.forEach((img) => {
    //         formData.append('imgs', img);
    //       });
    //       await uploadProductImgs({ product_id, mutationData: formData });
    //     }
    //   })
    //   .then(() => {
    //     setImages([]);
    //     productFormClose && productFormClose();
    //     openSuccessModal && openSuccessModal();
    //   })
    //   .catch(() => {
    //     return;
    // });
  };
  useEffect(() => {
    console.log(deletedImages);
  }, [deletedImages]);
  // useEffect(() => {
  //   console.log('images', images);
  // }, [images]);
  //이미지 초기화
  useEffect(() => {
    if (product.imgs) {
      setImages(
        product.imgs.map((image) => ({
          image,
          sequence: image.sequence,
        })),
      );
      setIamgeUrls(
        product.imgs.map((image, i) => ({
          url: image.url,
          index: i,
          type: 'ProductImg',
        })),
      );
    }
  }, [product]);

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
        {imageUrls.length > 0 && (
          <>
            <Label label="PRODUCT'S THUMBNAIL" mode={mode === 'dark' ? 'white' : 'dark'} label_weight="bold" />
            <ImageListBox>
              <ImageBox>
                <Image
                  alt="이미지"
                  src={imageUrls[0].url}
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
              perPage: imageUrls.length > 5 ? 5 : imageUrls.length > 0 ? imageUrls.length : 1,
            }}>
            {imageUrls.map((imageUrl, i) => {
              return (
                <SplideSlide key={'image' + i}>
                  <ImageBox>
                    <Image
                      alt="이미지"
                      src={imageUrl.url}
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
        {imageUrls.length < 10 ? (
          <ImageLable mode={mode}>
            IMAGE ADD
            <Input multiple={true} type={'file'} onChange={imageInpuOnChange}></Input>
          </ImageLable>
        ) : (
          <></>
        )}
        {deletedImages.length > 0 && (
          <>
            <Label label="DELETE" mode={mode === 'dark' ? 'white' : 'dark'} label_weight="bold" />
            <ImageListBox ref={imageAreaRef}>
              <Splide
                aria-label="new product imgs"
                options={{
                  arrows: false,
                  perMove: 1,
                  perPage: deletedImages.length > 5 ? 5 : deletedImages.length > 0 ? deletedImages.length : 1,
                }}>
                {deletedImages.map((image, i) => {
                  return (
                    <SplideSlide key={'delete image' + i}>
                      <ImageBox>
                        <Image
                          alt="이미지"
                          src={(image.image as ProductImg).url}
                          fill
                          style={{ objectFit: 'contain', objectPosition: 'center' }}
                        />
                      </ImageBox>

                      <ImageButtonBox>
                        <Button label="recover" size="large" onClick={recoverButton(i)} />
                      </ImageButtonBox>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </ImageListBox>
          </>
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
