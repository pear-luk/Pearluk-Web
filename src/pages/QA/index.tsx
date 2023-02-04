import { useState } from 'react';
import { QA_mode, QnAHeader } from '../../components/foundations/QnAHeader';
import { LayOut } from '../../components/layout';
import { QnACard } from '../../components/modules/QnACard';

import { INavIconType } from '../../recoil/Nav/navState';
import { ModeType } from '../../types/common/mode';

function QA({ props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const [icon] = useState<INavIconType>({
    logo: true,
    menu: false,
  });
  const [QA_mode] = useState<QA_mode>('list_read');
  return (
    <LayOut mode={mode} icon={icon}>
      <>
        <QnAHeader QA_mode={QA_mode} mode={mode} size={'medium'} page="qa" />
        <QnACard mode={mode}></QnACard>
      </>
    </LayOut>
  );
}

export default QA;
