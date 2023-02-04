import styled from 'styled-components';
import { FontWeight, Size } from '../../../styles/theme';
import { LabelType, ModeType } from '../../../types/common/propsTypes';

interface Props {
  mode: ModeType;

  label: string;
  label_type?: LabelType;
  label_weight?: keyof FontWeight;
  label_size?: keyof Size['font'];
}
// (typeof E_status)[keyof typeof E_status]

export const Label = ({
  label,
  label_type = 'top',
  label_size = 'medium',
  label_weight = 'medium',
  ...props
}: Props) => {
  return (
    <StyledLabel label_type={label_type} label_size={label_size} label_weight={label_weight} {...props}>
      {label}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<Omit<Props, 'label'>>`
  align-items: center;
  flex: 1 0 auto;

  //color
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  //font
  font-weight: ${({ theme, label_weight }) => label_weight && theme.fontWeight[label_weight]};
  font-size: ${({ label_size, theme }) => label_size && theme.size.font[label_size]};

  // type
  display: ${({ label_type }) => (label_type === 'top' ? 'block' : 'inline-block')};
  margin-bottom: ${({ theme, label_type }) => (label_type === 'top' ? theme.size.space.xxsmall : 0)};
  margin-left: ${({ theme, label_type }) => (label_type === 'right' ? theme.size.space.xxsmall : 0)};
  margin-right: ${({ theme, label_type }) => (label_type === 'left' ? theme.size.space.xxsmall : 0)};
`;
