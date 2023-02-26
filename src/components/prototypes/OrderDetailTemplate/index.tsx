import styled from 'styled-components';
import { ModeType } from '../../../types/common/propsTypes';
import { BankList } from '../../../types/common/tossBank';
import { Order } from '../../../types/model/order';
import { MyInfoGetResponseDTO } from '../../../types/response/my';
import { Label } from '../../elements/Label';
import { Header } from '../../foundations/Header';
import { PriceLabel } from '../../foundations/PriceLabel';

import { LayOut } from '../../layout/layout';
import { CustomerInfoCard } from '../../modules/CustomerInfoCard';
import { OrderDetailProductListCard } from '../../modules/OrderDetailProductListCard';
import { RecipientInfoCard } from '../../modules/RecipientInfoCard';
interface Props {
  mode: ModeType;

  user?: MyInfoGetResponseDTO;
  order: Order;
}

export const OrderDetailTemplate = ({ mode, order }: Props) => {
  return (
    <LayOut mode={mode} menu={true} centerLogo={true}>
      <Header mode={mode} label="MY ORDER" />
      <OrderDetailProductListCard mode={mode} order={order} />
      <CustomerInfoCard mode={mode} customerInfo={order.customer_info} disabled={true} />
      <RecipientInfoCard mode={mode} recipientInfo={order.recipient_info} disabled={true} />
      <Box>
        <Header mode={mode} label="TOTAL" />
        <Box>
          <PriceLabel mode={mode} label="PRODUCT" price={Number(order.total_price) - 3500} />
        </Box>
        <Box>
          <PriceLabel mode={mode} label="SHIPPING FEE" price={3500} sign="+" />
        </Box>
        <BoxLarge>
          <PriceLabel mode={mode} label="TOTAL" price={Number(order.total_price)} />
        </BoxLarge>
      </Box>
      <Header mode={mode} label="PAYMENT" />
      <Box>
        <PriceLabel mode={mode} label={order.payment_info?.method} price={Number(order.total_price)} />
      </Box>
      {order.payment_info?.method === '가상계좌' && (
        <Box>
          <Label
            mode={mode}
            label={`${
              BankList.find((bank) =>
                bank.code.find((code) => order.payment_info && code === (order.payment_info.bank_code as string)),
              )?.name
            } ${order.payment_info.account_number?.slice(1)}`}
            label_size="small"
          />
        </Box>
      )}
      <Box>
        <Label
          mode={mode}
          label={` ${order.payment_info?.payment_status === 'DONE' ? '결제완료' : '결제대기중'}`}
          label_size="small"
        />
      </Box>
    </LayOut>
  );
};

const Box = styled.div`
  margin-top: 0.8rem;
`;

const BoxLarge = styled.div`
  margin-top: 2.4rem;
`;
