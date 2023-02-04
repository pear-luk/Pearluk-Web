import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { HeaderType, ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;
  header_type?: HeaderType;
  label: string;
  label_size: keyof Size['font'];
}

export const Header = ({ mode, label, header_type = 'center', label_size = 'primary' }: Props) => {
  return (
    <Container mode={mode} header_type={header_type} label_size={label_size}>
      <LabelBox>{label}</LabelBox>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'label'>>`
  height: auto;

  border-bottom: 1px solid
    ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  /* padding-top: 2.4rem;
  padding-bottom: 0.8rem; */

  background-color: transparent;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  font-size: ${({ theme, label_size }) => label_size && theme.size.font[label_size]};

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: ${({ header_type }) => header_type};
`;
const LabelBox = styled.div`
  /* margin: auto; */
  padding-top: 2.4rem;
  padding-bottom: 0.8rem;
`;
