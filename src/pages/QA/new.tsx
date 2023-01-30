import { useState } from 'react';
import { LayOut } from '../../components/layout';

import { QA_InputCard } from '../../components/QA_InputCard';
import { QA_top } from '../../components/QA_top';
import { ModeType } from '../../recoil/config/configState';
import { INavIconType } from '../../recoil/Nav/navState';

function NewQA({ props }) {
  // mode, icon
  const [mode] = useState<ModeType>('white');
  const [icon] = useState<INavIconType>({
    logo: true,
    menu: false,
  });
  const [write] = useState(false);
  return (
    <LayOut mode={mode} icon={icon}>
      <>
        <QA_top write={write} />
        <QA_InputCard mode={mode}></QA_InputCard>
      </>
    </LayOut>
  );
}

export default NewQA;
