import { MyOrderListGetResponseDTO } from './../../../types/response/order';
import { API } from './../../util/API';
export const getMyOrderList = async () => (await API<MyOrderListGetResponseDTO>('/orders', { method: 'get' })).data;
