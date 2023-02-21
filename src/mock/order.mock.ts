import { faker } from '@faker-js/faker';
import {
  Order,
  OrderCustomerInfo,
  OrderProduct,
  OrderRecipientInfo,
  PaymentInfo,
  Shipping,
} from './../types/model/order';

export const orderProductMock: () => OrderProduct = () => ({
  order_id: faker.lorem.word(26),
  product_id: faker.lorem.word(26),
  count: faker.datatype.number({ min: 1, max: 20 }),
  price: faker.datatype.number({ min: 10000, max: 200000 }),
  product: {
    name: faker.lorem.word(10),
    price: faker.datatype.number({ min: 10000, max: 200000 }) as number,
    imgs: ['/imgs/test1.png'],
  },
});

export const orderProductListMock: OrderProduct[] = [orderProductMock(), orderProductMock(), orderProductMock()];

export const orderCustomerInfoMock: OrderCustomerInfo = {
  order_id: faker.lorem.word(26),
  name: faker.name.fullName(),
  phone_number: faker.phone.number(),
};

export const orderRecipientInfoMock: OrderRecipientInfo = {
  order_id: faker.lorem.word(26),
  name: faker.name.fullName(),
  post_code: faker.address.zipCode(),
  phone_number: faker.phone.number(),
  full_address: faker.lorem.word(26),
  address: faker.lorem.word(20),
  detail_address: faker.lorem.word(12),
};

export const orderShippingMock: Shipping = {
  order_id: faker.lorem.word(26),
  courier_id: 1,
  courier_name: faker.lorem.word(4),
  waybill_number: faker.lorem.word(14),
  shipping_status: 0,
};
export const payMentInfoMock: PaymentInfo = {
  order_id: faker.lorem.word(26),
  key: faker.lorem.word(26),
  method: '카드',
  payment_status: 'DONE',
};

export const orderMock: Order = {
  order_id: faker.lorem.word(26),

  name: faker.lorem.word(26),

  user_id: faker.lorem.word(26),

  total_price: faker.datatype.number({ min: 10000, max: 200000 }),

  order_status: 0,

  payment_status: 0,

  order_products: orderProductListMock,

  customer_info: orderCustomerInfoMock,

  recipient_info: orderRecipientInfoMock,

  payment_info: payMentInfoMock,

  shipping: orderShippingMock,

  created_at: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
};
