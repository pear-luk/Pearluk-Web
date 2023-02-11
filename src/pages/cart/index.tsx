import { useState } from 'react';
import { LayOut } from '../../components/layout';
import { ModeType } from '../../types/common/propsTypes';

function Cart() {
  // mode, icon
  const [mode] = useState<ModeType>('dark');

  return <LayOut mode={mode}></LayOut>;
}

export default Cart;
