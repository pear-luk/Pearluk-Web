import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../../types/common/mode';

import { Button } from '../../elements/Button';
interface Props {
  mode: ModeType;
  size: 'large' | 'medium';
}

export const QnAInputCard = ({ mode = 'white', size = 'medium', ...props }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [secret, setSecret] = useState<boolean>(false);
  const [action, setAction] = useState<'ADD' | 'DELETE' | null>(null);
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
  }, [images, action]);

  useEffect(() => {
    if (secret === false) {
      if (passwordRef.current) passwordRef.current.value = '';
    }
  }, [secret]);
  return (
    <Container mode={mode} size={size}>
      <TitleInputBox>
        <InputName>TITLE</InputName>
        <TitleInput mode={mode}></TitleInput>
      </TitleInputBox>
      <ImageInputBox ref={imageAreaRef}>
        {/* <ImageInput mode={mode}>+</ImageInput> */}

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
        <ContentInput
          mode={mode}
          ref={textareaRef}
          id="question_input"
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}></ContentInput>
      </ContentInputBox>

      <SubmitBox>
        <CheckBoxLabel>
          <Checkbox
            onClick={() => {
              setSecret(!secret);
            }}
            checked={secret}
          />
          <CustomCheckBox mode={mode}></CustomCheckBox>
          비밀글
        </CheckBoxLabel>
        <PasswordLabel>
          비밀번호
          <PasswordInput mode={mode} disabled={secret === false ? true : false} ref={passwordRef} />
        </PasswordLabel>
        <Button label="OK" color={mode === 'white' ? 'black' : 'yellow'}></Button>
      </SubmitBox>
    </Container>
  );
};
const Container = styled.div<Pick<Props, 'mode' | 'size'>>`
  width: ${({ size, theme }) => (size === 'medium' ? theme.size.width.medium : theme.size.width.large)};
  color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  padding: 0.8rem 0;
  input,
  textarea {
    background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
    color: ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  }
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

const TitleInputBox = styled.div`
  /* display: flex; */
  /* height: 2rem; */

  width: 100%;
`;

const InputName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  /* display: block; */
`;

const TitleInput = styled.input<Pick<Props, 'mode'>>`
  /* background-color: ${({ mode, theme }) =>
    mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow}; */

  width: 100%;
  height: 2.4rem;

  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  margin-top: 0.4rem;
  display: block;
`;

// const ImageInput = styled.button`
//   width: 5rem;
//   height: 5rem;
//   background-color: black;
//   margin-left: 0.8rem;
//   color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
// `;

const ImageInputBox = styled.div`
  margin: 1.6rem 0;
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  padding: 0 0.4rem;
`;

const ContentInputBox = styled.div``;

const ContentInput = styled.textarea<Pick<Props, 'mode'>>`
  /* background-color: ${({ mode, theme }) =>
    mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow}; */

  width: 100%;

  min-height: 10.6rem;
  resize: none;
  overflow: hidden;
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
`;

const SubmitBox = styled.div`
  margin-top: 1.6rem;
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  height: 1.6rem;
`;
const CustomCheckBox = styled.span<Pick<Props, 'mode'>>`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  margin-right: 0.4rem;
  /* background-color: transparent; */
`;

const PasswordLabel = styled.label`
  display: flex;

  align-items: center;

  height: 1.6rem;
`;
const PasswordInput = styled.input<Pick<Props, 'mode'>>`
  /* background-color: ${({ mode, theme }) =>
    mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow}; */
  border: 1px solid ${({ theme, mode }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  margin-left: 0.4rem;
  width: 10rem;
  height: 2rem;
`;

const Checkbox = styled.input.attrs((props) => ({
  type: 'checkBox',
  id: 'secret',
}))`
  width: 1.6rem;
  height: 1.6rem;

  outline: none;
  display: none;

  :checked ~ ${CustomCheckBox} {
    background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};
  }
`;
