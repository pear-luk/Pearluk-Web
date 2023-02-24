import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';

import { Button } from '../../elements/Button';
import { CheckBox } from '../../elements/CheckBox';
import { TextArea } from '../../elements/Textarea';
import { InputLabel } from '../../foundations/InputLabel';
interface Props {
  mode: ModeType;
  size: 'large' | 'medium';

  //QnA requestDTO필요
  setQnA?: React.Dispatch<React.SetStateAction<object>>;
}

export const QnAForm = ({ mode = 'white', size = 'medium' }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [secret, setSecret] = useState<boolean>(false);
  const [action, setAction] = useState<'ADD' | 'DELETE' | null>(null);

  const submitButtonOnclick = () => {
    // images.forEach((img) => formData.append('imgs', img));
    // axios('/api/upload', {
    //   method: 'post',
    //   data: formData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currentValue]);

  useEffect(() => {
    if (imageAreaRef.current && action === 'ADD') {
      imageAreaRef.current.scrollTo({ left: imageAreaRef.current.scrollWidth });
    }
    console.log(images);
  }, [images, action]);

  useEffect(() => {
    if (secret === false) {
      if (passwordRef.current) passwordRef.current.value = '';
    }
  }, [secret]);

  const textAreaChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.value && setCurrentValue(e.target.value);
  }, []);

  const checkBoxClickHandler = useCallback(() => {
    setSecret(!secret);
  }, [secret]);
  return (
    <Container mode={mode} size={size}>
      <InputLabel mode={mode} input_width={size} label="TITLE"></InputLabel>
      <ImageInputBox ref={imageAreaRef}>
        {images?.map((image, i) => {
          if (image as MediaSource | Blob) {
            const objectUrl = URL?.createObjectURL(image);

            return (
              <ImageBox key={i}>
                <Image
                  alt="이미지"
                  src={objectUrl}
                  // width={50}
                  // height={50}
                  key={image.name}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
                <ImageDelete
                  onClick={() => {
                    const imgs = [...images];
                    imgs.splice(i, 1);

                    setImages([...imgs]);
                    setAction('DELETE');
                  }}>
                  X
                </ImageDelete>
              </ImageBox>
            );
          }
          return;
        })}

        {images.length < 10 ? (
          <ImageLable mode={mode}>
            +
            <Input
              multiple={true}
              type={'file'}
              onChange={(e) => {
                if (e.currentTarget.files) {
                  setImages([...images, ...Array.from(e.currentTarget.files)]);
                  setAction('ADD');
                }
              }}></Input>
          </ImageLable>
        ) : null}
      </ImageInputBox>

      <ContentInputBox>
        <TextArea
          mode={mode}
          size={size}
          ref={textareaRef}
          id="question_contents"
          onChange={textAreaChangeHandler}></TextArea>
      </ContentInputBox>

      <SubmitBox>
        <CheckBox mode={mode} onChange={checkBoxClickHandler} label={'비밀글'} checked={Boolean(secret)}></CheckBox>

        <PasswordLabel>
          비밀번호
          <PasswordInput mode={mode} disabled={secret === false ? true : false} ref={passwordRef} />
        </PasswordLabel>
        <Button label="OK" color={mode === 'white' ? 'black' : 'yellow'} onClick={submitButtonOnclick}></Button>
      </SubmitBox>
    </Container>
  );
};
const Container = styled.div<Pick<Props, 'mode' | 'size'>>`
  width: ${({ size, theme }) => (size === 'medium' ? theme.size.width.medium : theme.size.width.large)};
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  padding: 1.6rem 0;
`;

const ImageDelete = styled.div`
  position: absolute;
  font-size: 1.4rem;
  right: 0.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.yellow.yellow};
`;
const ImageBox = styled.div`
  background-color: black;
  display: block;
  width: 5rem;
  position: relative;
  height: 5rem;
  margin: 0 0.4rem;
  flex-basis: auto;

  overflow-x: scroll;
  flex: 0 0 auto;
`;
const ImageLable = styled.label<Pick<Props, 'mode'>>`
  /* display: block; */
  width: 5rem;
  height: 5rem;
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
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

const ImageInputBox = styled.div`
  margin: 1.6rem 0;
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  padding: 0 0.4rem;
`;

const ContentInputBox = styled.div``;

const SubmitBox = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const PasswordLabel = styled.label`
  display: flex;

  align-items: center;

  height: 1.6rem;
`;
const PasswordInput = styled.input<Pick<Props, 'mode'>>`
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  background-color: transparent;
  margin-left: 0.4rem;
  width: 10rem;
  height: 2rem;
`;
