import { Size } from '../../../styles/theme';
import { ModeType } from '../../../types/common/propsTypes';
import { PriceLabel } from '../../foundations/PriceLabel';
interface Props {
  mode: ModeType;
  total: number;
  point: number;
  size?: keyof Size['width'];
  font_size?: keyof Size['font'];
}
export const AmountCard = ({ mode, total, point, size = 'medium', font_size = 'primary' }: Props) => {
  return (
    <>
      <PriceLabel mode={mode} label="TOTAL" price={total} size={size} font_size={font_size} price_weight="bold" />
      <PriceLabel mode={mode} label="POINT" price={point} size={size} font_size={font_size} price_weight="bold" />
    </>
  );
};
