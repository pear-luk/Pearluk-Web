export interface ProductResponse {
  product_id: string;
  name: string;
  price: number;
  introduce: string;
  quantity: number;
  product_status: number;
  archive_id: string;
  category_id: string;
  imgs?: string[];
}
