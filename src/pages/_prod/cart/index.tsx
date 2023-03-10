import { useState } from 'react';
import { CartTemplate } from '../../../components/prototypes/CartTemplate';
import { LayOut } from '../../../components/_layout/layout';
import { useCart } from '../../../hooks/queries/cartQuery';
import { ModeType } from '../../../types/common/propsTypes';

function Cart() {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const { cartProductList, isCartLoading } = useCart();

  if (isCartLoading) {
    return <LayOut mode={mode} />;
  }
  return <CartTemplate mode={mode} cartProductList={cartProductList} />;
}

export default Cart;
