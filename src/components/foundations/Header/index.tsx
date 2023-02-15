import styled from 'styled-components';
import { Size } from '../../../styles/theme';
import { HeaderType, ModeType } from '../../../types/common/propsTypes';
import { CheckBox } from '../../elements/CheckBox';

interface Props {
  mode: ModeType;
  header_type?: HeaderType;
  size?: keyof Size['width'];

  label?: string;
  label_size?: keyof Size['font'];

  button_label?: string;
  button_size?: keyof Size['font'];
  button_location?: 'left' | 'right';
  button_onClick?: (() => void) | ((e: React.MouseEvent) => void);

  chechBox?: boolean;
  checkBox_location?: 'left' | 'right';
  checkBox_onChange?: (() => void) | ((e: React.ChangeEvent) => void);
  checkBox_checked?: boolean;
}

export const Header = ({
  mode,
  label,
  header_type = 'center',
  label_size = 'primary',
  size = 'medium',
  button_label,
  button_size = 'small',
  button_onClick,
  button_location = 'right',
  chechBox = false,
  checkBox_location = 'left',
  checkBox_onChange,
  checkBox_checked,
}: Props) => {
  return (
    <Container mode={mode} header_type={header_type} label_size={label_size} size={size} button_label={button_label}>
      {chechBox && checkBox_location === 'left' ? (
        <LeftItemBox>
          <LeftItem>
            <CheckBox mode={mode} onChange={checkBox_onChange} checked={checkBox_checked} />
          </LeftItem>
        </LeftItemBox>
      ) : button_label && button_location === 'left' ? (
        <LeftItemBox>
          <LeftButton onClick={button_onClick} button_size={button_size}>
            {button_label}
          </LeftButton>
        </LeftItemBox>
      ) : header_type === 'center' ? (
        <LeftItemBox>
          <ItemBox />
        </LeftItemBox>
      ) : null}
      {/* {header_type === 'center' && button_label && <ItemBox></ItemBox>} */}

      <LabelBox>
        <Label>{label}</Label>
      </LabelBox>
      {/* 
      {button_label && (
        <ItemBox>
          <Button onClick={button_onClick} button_size={button_size}>
            {button_label}
          </Button>
        </ItemBox>
      )} */}

      {chechBox && checkBox_location === 'right' ? (
        <RightItemBox>
          <RightItem>
            <CheckBox mode={mode} onChange={checkBox_onChange} checked={checkBox_checked} />
          </RightItem>
        </RightItemBox>
      ) : button_label && button_location === 'right' ? (
        <RightItemBox>
          <RightButton onClick={button_onClick} button_size={button_size}>
            {button_label}
          </RightButton>
        </RightItemBox>
      ) : header_type === 'center' ? (
        <RightItemBox>
          <ItemBox />
        </RightItemBox>
      ) : null}
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'label'>>`
  height: auto;
  width: ${({ theme, size }) => size && theme.size.width[size]};

  padding-top: 2.4rem;
  padding-bottom: 0.8rem;

  display: flex;
  justify-content: ${({ header_type, button_label }) => (button_label ? 'space-between' : header_type)};
  justify-content: space-between;
  /* align-items: flex-end; */

  border-bottom: 1px solid
    ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  background-color: transparent;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  font-size: ${({ theme, label_size }) => label_size && theme.size.font[label_size]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: ${({ header_type }) => header_type};
`;
const LabelBox = styled.div`
  flex: 1 0 auto;

  vertical-align: bottom;

  /* width: fit-content; */
  display: flex;
  align-items: flex-end;
`;

const Label = styled.div``;

const ItemBox = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: right;
  position: relative;
`;
const LeftItemBox = styled(ItemBox)`
  text-align: left;
`;
const RightItemBox = styled(ItemBox)`
  text-align: right;
`;
const Item = styled.div``;
const LeftItem = styled(Item)`
  float: left;
  left: 0;
`;
const RightItem = styled(Item)`
  float: right;
  right: 0;
`;

const Button = styled.div<{ button_size?: keyof Size['font'] }>`
  width: fit-content;

  position: absolute;
  bottom: 0;
  font-size: ${({ theme, button_size }) => button_size && theme.size.font[button_size]};
  font-weight: 400;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
`;

const LeftButton = styled(Button)`
  float: left;
  left: 0;
`;
const RightButton = styled(Button)`
  float: right;
  right: 0;
`;
