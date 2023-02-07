import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';

import { Button } from '../../elements/Button';
import { InputLabel } from '../../foundations/InputLabel';
import { InputPhone } from '../../foundations/InputPhone';
import { AddressForm } from '../AddressForm';

interface Props {
  mode: ModeType;
}

export const MyCard = ({ mode }: Props) => {
  return (
    <Container>
      <Box>
        <InputLabel mode={mode} label="E-MAIL" />
      </Box>
      <Box>
        <InputLabel mode={mode} label="NAME" />
      </Box>
      <Box>
        <InputPhone mode={mode} label="PHONE"></InputPhone>
      </Box>
      <Box>
        <AddressForm mode={mode}></AddressForm>
      </Box>
      <BottonBox>
        <Button color={mode === 'dark' ? 'yellow' : 'black'} size="large" label="SAVE"></Button>
        <Button color="transparent" size="large" label="LOG OUT"></Button>
        <Button color="transparent" size="large" label="LEAVE.."></Button>
      </BottonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 29.4rem;
`;
const Box = styled.div`
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
