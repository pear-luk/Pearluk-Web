import { useState } from 'react';
import { ModeType } from '../../../types/common/propsTypes';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../layout';

export const CartTemplate = () => {
  const [mode] = useState<ModeType>('white');

  return (
    <LayOut mode={mode}>
      <Header mode={mode} label="MY CART" chechBox={true} />
    </LayOut>
  );
};
