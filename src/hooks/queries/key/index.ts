export const AUTH_KEY = ['AUTH'];

export const ARCHIVE_LIST_KEY = ['archives'];

export const PRODUCT_LIST_KEY = ({
  page,
  archive,
}: {
  page: string | string[] | undefined;
  archive: string | string[] | undefined;
}) => ['products', { page, archive }];

export const PROUCT_DETAIL_KEY = ({ product_id }: { product_id: string }) => ['products', product_id];

export const CART_KEY = ['cart'];

export const ORDER_KEY = ['order'];

export const ORDER_DETAIL_KEY = (order_id: string) => ['order', `${order_id}`];
