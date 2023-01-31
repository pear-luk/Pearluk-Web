import { forwardRef, HTMLInputTypeAttribute, RefObject } from 'react';
import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
import { FontWeight, Size } from '../../styles/theme';
type Label_type = 'top' | 'left' | 'right';

interface Props {
  mode: ModeType;
  type?: HTMLInputTypeAttribute;

  input_width?: keyof Size['width'];
  input_height?: keyof Size['space'];

  label: string;
  label_type?: Label_type;
  label_size?: keyof Size['font'];
  label_weight?: keyof FontWeight;

  ref?: RefObject<HTMLInputElement>;
  onChange?: () => void;
}
// (typeof E_status)[keyof typeof E_status]

export const InputCustom = forwardRef(
  ({
    mode,
    type = 'text',

    input_width = 'medium',
    input_height = 'base',

    label,
    label_type = 'top',
    label_size = 'medium',
    label_weight = 'medium',

    ref,
    onChange,
  }: Props) => {
    return (
      <Container
        mode={mode}
        label_size={label_size}
        label_weight={label_weight}
        label_type={label_type}
        input_width={input_width}
        input_height={input_height}>
        {(label_type === 'top' || label_type === 'left') && <Label label_type={label_type}>{label}</Label>}
        <Input type={type} onChange={onChange} ref={ref} />
        {label_type === 'right' && <Label label_type={label_type}>{label}</Label>}
      </Container>
    );
  },
);

const Container = styled.div<Omit<Props, 'label' | 'onChange' | 'type'>>`
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
  font-size: ${({ label_size, theme }) => label_size && theme.size.font[label_size]};
  display: ${({ label_type }) => label_type !== 'top' && 'flex'};
  label {
    font-weight: ${({ theme, label_weight }) => label_weight && theme.fontWeight[label_weight]};
    margin-bottom: ${({ theme, label_type }) => (label_type === 'top' ? theme.size.space.xxsmall : 0)};
    margin-left: ${({ theme, label_type }) => (label_type === 'right' ? theme.size.space.xxsmall : 0)};
    margin-right: ${({ theme, label_type }) => (label_type === 'left' ? theme.size.space.xxsmall : 0)};
  }
  input {
    background-color: transparent;
    border: 1px solid ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
    color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};
    font-size: 1rem;
    width: ${({ theme, input_width }) => input_width && theme.size.width[input_width]};
    height: ${({ theme, input_height }) => input_height && theme.size.space[input_height]};
  }
`;

const Label = styled.label<{ label_type: Label_type }>`
  align-items: center;
  margin: 0.4rem;
  display: ${({ label_type }) => (label_type === 'top' ? 'block' : 'inline-block')};
`;

const Input = styled.input.attrs(({ type }) => ({ type: type }))``;
