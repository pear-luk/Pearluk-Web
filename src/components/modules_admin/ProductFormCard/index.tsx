import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { FontWeight, Size } from '../../../styles/theme';
import { ButtonColorType, ModeType } from '../../../types/common/propsTypes';
import { Archive } from '../../../types/model/archive';
import { Category } from '../../../types/model/category';
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
}
export const ProductForm = ({
  mode,

  input_width = 'medium',
  input_height = 'base',
  label_size = 'medium',
  label_weight = 'bold',

  OK_Button = true,
  OK_Button_onClick,
  NO_Button = true,
  NO_Button_onClick,
  categoryList,
  archiveList,
  setCategoryList,
  createCategory,
}: Props) => {
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [action, setAction] = useState<'ADD' | 'DELETE' | null>(null);

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
    if (e.currentTarget.files) {
      const newImages = Array.from(e.currentTarget.files);
      const nowImages = [...images, ...newImages];
      setImages(nowImages.slice(0, 10));
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
  }, []);

  const changeImageSequenceButton = (index: number, type: '+' | '-') => () => {
    if (type === '+' && index !== images.length - 1) {
      setImages([
        ...images.slice(0, index),
        ...images.slice(index + 1, index + 2),
        ...images.slice(index, index + 1),
        ...images.slice(index + 2),
      ]);
    }
    if (type === '-' && index !== 0) {
      setImages([
        ...images.slice(0, index - 1),
        ...images.slice(index, index + 1),
        ...images.slice(index - 1, index),
        ...images.slice(index + 1),
      ]);
    }
  };
  const deleteButton = (index: number) => () => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  useEffect(() => {
    console.log(categoryId);
  }, [categoryId]);
  useEffect(() => {
    console.log(introduce);
  }, [introduce]);
  useEffect(() => {
    setImageUrls(
      images.map((image) => {
        const objectUrl = URL?.createObjectURL(image);
        return objectUrl;
      }),
    );
  }, [images]);
  const okButtonHandler = (e: React.MouseEvent) => {};

  return (
    <Wrap>
      <Container mode={mode}>
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'}
          input_width="large"
          label="NAME"
          onChange={onChangeName}
          value={'' || name}
        />
        <Box>
          <Label mode={mode === 'dark' ? 'white' : 'dark'} label="ARCHIVE" />
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
          <Label mode={mode === 'dark' ? 'white' : 'dark'} label="PARENT CATEGORY" />
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
          <Label mode={mode === 'dark' ? 'white' : 'dark'} label="CHILD CATEGORY" />
          <Select
            mode={mode === 'dark' ? 'white' : 'dark'}
            name="child_category"
            id="child_category"
            onChange={childCategorySelectOnChange}>
            <option value={'선택'}>선택</option>
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
          onChange={onChangeQuantity}
          value={'' || quantity}
        />
        <InputLabel
          mode={mode === 'dark' ? 'white' : 'dark'}
          input_width="large"
          label="PRICE"
          onChange={onChangePrice}
          value={'' || price}
        />

        {images.length > 0 && (
          <>
            <Label label="THUMBNAIL" mode={mode === 'dark' ? 'white' : 'dark'} label_weight="bold" />
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
                    <SequenceButtonBox>
                      <Button label="<" size="large" onClick={changeImageSequenceButton(i, '-')} />
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
              onClick={NO_Button_onClick}
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
  row-gap: 0.8rem;
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
const SequenceButtonBox = styled.div`
  display: flex;
  justify-content: center;
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
