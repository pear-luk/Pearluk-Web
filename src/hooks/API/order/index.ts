import { Order } from '../../../types/model/order';
import { OrderCreateRequestDTO } from '../../../types/request/order';
import { MyOrderListGetResponseDTO } from '../../../types/response/order';
import { API } from '../../util/API';
export const getMyOrderList = async () => (await API<MyOrderListGetResponseDTO>('/orders', { method: 'get' })).data;

export const createOrder = async (mudationData: OrderCreateRequestDTO) => {
  return (await API<Order>('/orders', { method: 'post', data: mudationData })).data;
};
