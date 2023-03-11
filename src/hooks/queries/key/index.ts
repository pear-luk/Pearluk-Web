export const AUTH_KEY = ['AUTH'];

export const ARCHIVE_LIST_KEY = ['archives'];
export const PRODUCT_ALL_LIST_KEY = ['products'];
export const PRODUCT_LIST_KEY = ({
  page,
  archive,
  search,
  parentCategory,
  childCategory,
}: {
  page: string | string[] | undefined;
  archive?: string | string[] | undefined;
  search?: string | string[] | undefined;
  parentCategory?: string | string[] | undefined;
  childCategory?: string | string[] | undefined;
}) => ['products', { page, archive, search, parentCategory, childCategory }];

export const PROUCT_DETAIL_KEY = ({ product_id }: { product_id: string }) => ['products', product_id];

export const CART_KEY = ['cart'];

export const ORDER_KEY = ['order'];

export const ORDER_DETAIL_KEY = (order_id: string) => ['order', `${order_id}`];

export const QUESTION_KEY = ['questions'];

export const QUESTION_LIST_KEY = ({ page, type, product }: { page?: string; type?: string; product?: string }) => [
  'questions',
  { page, type, product },
];

export const QUESTION_DETAIL_KEY = (question_id: string) => ['questions', { question_id: question_id }];

export const CATEGORY_KEY = ['categories'];
