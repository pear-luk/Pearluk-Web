import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
interface Props {
  mode: ModeType;
  labelType?: 'center' | 'left' | 'right';
  label: string;
}

export const Header = ({ mode, label, labelType = 'center' }: Props) => {
  return (
    <Container mode={mode} labelType={labelType}>
      <LabelBox>{label}</LabelBox>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'label'>>`
  height: 4.6rem;
  border-bottom: 1px solid black;
  padding-top: 2.4rem;
  padding-bottom: 0.8rem;
  font-size: ${({ theme }) => theme.size.font.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: ${({ labelType }) => labelType};
`;
const LabelBox = styled.div`
  margin: auto;
`;
