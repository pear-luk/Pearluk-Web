import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { InputCustom } from '../Input';

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
        <InputCustom mode={mode} label="PHONE"></InputCustom>
      </ItemBox>

      <ItemBox>
        <InputCustom mode={mode} label="PSOTCODE"></InputCustom>
      </ItemBox>

      <ItemBox>
        <InputCustom mode={mode} label="ADDRESS"></InputCustom>
      </ItemBox>
    </Container>
  );
};

const Container = styled.div``;
const ItemBox = styled.div`
  margin: 0.8rem 0;
`;
