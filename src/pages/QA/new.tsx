import { useState } from 'react';
import { LayOut } from '../../components/layout';
import { QnAInputCard } from '../../components/QnAInputCard';

import { QnAHeader } from '../../components/QnAHeader';
import { ModeType } from '../../recoil/config/configState';
import { INavIconType } from '../../recoil/Nav/navState';

function NewQA({ props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const [icon] = useState<INavIconType>({
    logo: true,
    menu: false,
  });

  return (
    <LayOut mode={mode} icon={icon}>
      <>
        <QnAHeader mode={mode} size="medium" page="qa" />
        <QnAInputCard size="medium" mode={mode}></QnAInputCard>
      </>
    </LayOut>
  );
}

export default NewQA;
