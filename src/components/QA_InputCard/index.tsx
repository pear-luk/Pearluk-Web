import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { Button } from '../Button';
interface IProps {
  mode: ModeType;
}

export const QA_InputCard = ({ mode, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [currentValue]);

  return (
    <Container mode={mode}>
      <TitleInputBox>
        <InputName>TITLE</InputName>
        <TitleInput></TitleInput>
      </TitleInputBox>
      <ImageInputBox>
        <ImageInput></ImageInput>
        <ImageInput></ImageInput>
        <ImageInput></ImageInput>
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
          <p>비밀글</p>
        </CheckBoxLabel>
        <PasswordLabel>
          <p>비밀번호</p>
          <PasswordInput />
        </PasswordLabel>
        <Button label="OK" background="dark"></Button>
      </SubmitBox>
    </Container>
  );
};

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

const ImageInput = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: black;
  margin-left: 0.8rem;
`;

const ImageInputBox = styled.div`
  margin: 1.6rem 0;
  display: inline-block;
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
