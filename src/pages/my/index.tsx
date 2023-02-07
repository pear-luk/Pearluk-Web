import { InputAddress } from '../../components/foundations/InputAddress';
import { LayOut } from '../../components/layout';

function My({ props }) {
  // mode, icon

  return (
    <LayOut mode="white" menu={true} centerLogo={true}>
      <InputAddress mode="white"></InputAddress>
    </LayOut>
  );
}

export default My;
