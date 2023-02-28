import { useState } from 'react';
import { LayOut } from '../../../components/_layout/layout';
import { ModeType } from '../../../types/common/propsTypes';

function AdminHome() {
  // mode, icon
  const [mode] = useState<ModeType>('dark');

  return <LayOut mode={mode} />;
}

export default AdminHome;
