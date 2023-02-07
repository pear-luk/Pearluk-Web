import { ModeType } from '../../../types/common/propsTypes';
import { Header } from '../../foundations/Header';
import { LayOut } from '../../layout';
import { MyInfoCard } from '../../modules/MyInfoCard';
interface Props {
  mode: ModeType;
}

export const MyTemplate = ({ mode }: Props) => {
  return (
    <LayOut mode="white" menu={true} centerLogo={true}>
      <Header mode="white" label="MY PAGE" />
      <Header mode="white" />
      <MyInfoCard mode="white"></MyInfoCard>
      
    </LayOut>
  );
};
