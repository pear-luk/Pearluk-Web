import { useState } from 'react';
import { AdminLayout } from '../../../components/_layout/AdminLayout';
import { ModeType } from '../../../types/common/propsTypes';

function AdminHome() {
  // mode, icon
  const [mode] = useState<ModeType>('dark');

  return <AdminLayout mode={mode} />;
}

export default AdminHome;
