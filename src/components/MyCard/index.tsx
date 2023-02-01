import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { Button } from '../Button';
import { Header } from '../Header';
import { InputCustom } from '../Input';
import { InputAddress } from '../InputAddress';
import { InputPhone } from '../InputPhone';

interface Props {
  mode: ModeType;
}

export const MyCard = ({ mode }: Props) => {
  return (
    <Container>
      <ItemBox>
        <InputCustom mode={mode} label="E-MAIL"></InputCustom>
      </ItemBox>
      <ItemBox>
        <InputCustom mode={mode} label="NAME"></InputCustom>
      </ItemBox>

      <ItemBox>
        <InputPhone mode={mode} label="PHONE"></InputPhone>
      </ItemBox>

      <ItemBox>
        <InputAddress mode={mode}></InputAddress>
      </ItemBox>

      <BottonBox>
        <Button color={mode === 'dark' ? 'yellow' : 'black'} size="large" label="SAVE"></Button>
        <Button color="transparent" size="large" label="LOG OUT"></Button>
        <Button color="transparent" size="large" label="LEAVE.."></Button>
      </BottonBox>
      <Header mode={mode} label="MY ORDER" labelType="left"></Header>
    </Container>
  );
};

const Container = styled.div`
  width: 29.4rem;
`;
const ItemBox = styled.div`
  margin: 0.8rem 0;
`;

const BottonBox = styled.div`
  width: 29.4rem;
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.size.space.medium};
  /* margin-bottom: ${({ theme }) => theme.size.space.xlarge}; */
  margin-bottom: 2rem;
`;