import styled from 'styled-components';
import { ModeType } from '../../recoil/config/configState';
interface Props {
  mode: ModeType;
  orderId: string;
  productsCount: number;
  address: string;
  oderStatus: string;
  mainProductImg: string;
}
export const OrderItem = ({ mode, orderId, productsCount, address, oderStatus, mainProductImg }: Props) => {
  return <Container></Container>;
};

const Container = styled.div``;
