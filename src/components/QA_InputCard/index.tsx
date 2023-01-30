import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { Button } from '../Button';
interface IProps {
  mode: ModeType;
}

export const QA_InputCard = ({ mode, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const imageAreaRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState('');
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currentValue]);
  useEffect(() => {
    if (imageAreaRef.current) {
      console.log(imageAreaRef.current.scrollWidth);
      imageAreaRef.current.scrollTo({ left: imageAreaRef.current.scrollWidth });
    }
  }, [images]);
  return (
    <Container mode={mode}>
      <TitleInputBox>
        <InputName>TITLE</InputName>
        <TitleInput></TitleInput>
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
                  }}>
                  X
                </ImageDelete>
              </ImageBox>
            );
          }
          return;
        })}

        {images.length < 10 ? (
          <ImageLable>
            +
            <Input
              type={'file'}
              onChange={(e) => {
                if (e.currentTarget.files) setImages([...images, ...Array.from(e.currentTarget.files)]);
              }}></Input>
          </ImageLable>
        ) : null}
        {/* <ImageLable>
          +
          <Input
            type={'file'}
            onChange={(e) => {
              if (e.currentTarget.files) setImages([...images, e.currentTarget.files[0]]);
            }}></Input>
        </ImageLable> */}
      </ImageInputBox>

      <ContentInputBox>
        <ContentInput
          ref={textareaRef}
          id="question_input"
          onChange={(e) => {
            setCurrentValue(e.target.value);
          }}></ContentInput>
      </ContentInputBox>

      <SubmitBox>
        <CheckBoxLabel>
          <Checkbox />
          <CustomCheckBox></CustomCheckBox>
          비밀글
        </CheckBoxLabel>
        <PasswordLabel>
          비밀번호
          <PasswordInput />
        </PasswordLabel>
        <Button label="OK" background="dark"></Button>
      </SubmitBox>
    </Container>
  );
};

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
const ImageLable = styled.label`
  /* display: block; */
  width: 5rem;
  height: 5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  color: yellow;
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
  border: 0;
`;

const Container = styled.div`
  width: 29.4rem;
  padding: 0.8rem 0;
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

const TitleInput = styled.input`
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  width: 100%;
  height: 2.4rem;
  border: 0.1rem solid black;
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

const ContentInput = styled.textarea`
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  width: 100%;

  min-height: 10.6rem;
  resize: none;
  overflow: hidden;
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
const CustomCheckBox = styled.span`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border: 0.1rem solid black;
  margin-right: 0.4rem;
  /* background-color: transparent; */
`;

const PasswordLabel = styled.label`
  display: flex;

  align-items: center;

  height: 1.6rem;
`;
const PasswordInput = styled.input`
  background-color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.grey.black : theme.color.yellow.yellow)};

  margin-left: 0.4rem;
  width: 10rem;
  height: 2rem;
  border: 1px solid black;
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
    background-color: black;
  }
`;
