import { Product } from '../model/product';

export type ProductListGetResponseDTO = { products: Product[]; total_count: number };
