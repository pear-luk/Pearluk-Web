import { Product } from '../model/product';

export type ProductListGetResponseDTO = { products: Product[]; total_count: number };

export type ProductStatusResponseDTO = {
  [index: string]: number;
  all: number;
  wait: number;
  forSale: number;
  onSale: number;
  soldout: number;
  stop: number;
  end: number;
};
