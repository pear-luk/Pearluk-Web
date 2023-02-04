import styled from 'styled-components';
import { ModeType } from '../../../types/common/mode';

import { Button } from '../../elements/Button';
import { Header } from '../../foundations/Header';
import { InputCustom } from '../../foundations/Input';
import { InputAddress } from '../../foundations/InputAddress';
import { InputPhone } from '../../foundations/InputPhone';

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
