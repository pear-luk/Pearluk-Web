import { useState } from 'react';


import { LayOut } from '../../../components/layout';

import { ModeType } from '../../../types/common/propsTypes';

// interface Props {}
function OrderFormPage() {
  // mode, icon
  const [mode] = useState<ModeType>('white');

  // const [write, setWrite] = useState(false);

  // const buttonHandler = useCallback(() => {
  //   setWrite(!write);
  // }, [write]);


  return <LayOut mode={mode} menu={true} centerLogo={true}></LayOut>;
}

export default OrderFormPage;
