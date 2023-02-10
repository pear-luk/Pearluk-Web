import { useState } from 'react';
import { LayOut } from '../../components/layout';
import { QnAInputCard } from '../../components/modules/QnAWriteCard';

import { QnAHeader } from '../../components/foundations/QnAHeader';

import { INavIconType } from '../../recoil/archive/state';
import { ModeType } from '../../types/common/propsTypes';

function NewQA() {
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
