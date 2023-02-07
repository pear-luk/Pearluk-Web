import styled from 'styled-components';
import { FontWeight, Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { Label } from '../../elements/Label';
interface Props {
  mode: ModeType;

  size?: keyof Size['width'];

  font_size?: keyof Size['font'];
  font_weight?: keyof FontWeight;
  price_weight?: keyof FontWeight;

  label: string;
  price: number;
  sign?: '+' | '-';
  // 선택한 아이템에따른 쿼리 (상품, QA ....)
  selectChangeQuery?: (select: string) => void;
}

export const PriceLabel = ({
  mode,
  label,
  size = 'medium',
  price,
  sign,
  font_size = 'small',
  price_weight = 'normal',
  font_weight = 'normal',
}: Props) => {
  return (
    <Container mode={mode} size={size} font_size={font_size} font_weight={font_weight}>
      <Label mode={mode} label={label} label_size={font_size} label_weight={font_weight} />
      <Box>
        {sign}
        <Price price_weight={price_weight}>{price.toLocaleString()} </Price>
        KRW
      </Box>
    </Container>
  );
};

const Container = styled.div<Omit<Props, 'label' | 'price' | 'sign'>>`
  display: flex;
  text-align: center;
  color: ${({ mode, theme }) => (mode === 'dark' ? theme.color.yellow.yellow : theme.color.grey.black)};

  width: ${({ theme, size }) => size && theme.size.width[size]};
  font-size: ${({ theme, font_size }) => font_size && theme.size.font[font_size]};
  font-weight: ${({ theme, font_weight }) => font_weight && theme.fontWeight[font_weight]};
  justify-content: space-between;
  align-items: center;
`;
const Box = styled.div``;

const Price = styled.span<{ price_weight?: keyof FontWeight }>`
  font-weight: ${({ price_weight, theme }) => price_weight && theme.fontWeight[price_weight]};
`;
