import { Header } from '../../components/foundations/Header';
import { InputLabel } from '../../components/foundations/InputLabel';
import { LayOut } from '../../components/layout';

function My({ props }) {
  // mode, icon

  return (
    <LayOut mode="white" menu={true} centerLogo={true}>
      <Header mode="white" label="MY PAGE" />
      <Header mode="white" />
      <InputLabel label="E_MAIL"></InputLabel>
    </LayOut>
  );
}

export default My;
