import { useState } from 'react';
import { LayOut } from '../../components/layout';
import { QA_Card } from '../../components/QA_Card';
import { QA_mode, QA_top } from '../../components/QA_top';
import { ModeType } from '../../recoil/config/configState';
import { INavIconType } from '../../recoil/Nav/navState';

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
        <QA_top QA_mode={QA_mode} mode={mode} size={'medium'} page="qa" />
        <QA_Card mode={mode}></QA_Card>
      </>
    </LayOut>
  );
}

export default QA;
