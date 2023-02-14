import { ModeType } from '../../../types/common/propsTypes';

import { LayOut } from '../../layout';
interface Props {
  mode: ModeType;
}

export const OrderFormTemplate = ({ mode }: Props) => {
  return <LayOut mode={mode} menu={true} centerLogo={true}></LayOut>;
};
