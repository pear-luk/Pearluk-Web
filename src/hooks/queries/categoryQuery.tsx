import { categoryListState } from '../../recoil/category/state';
import { Category } from '../../types/model/category';
import { getCategoryList } from '../API/category';
import { useRecoilQuery } from '../util/useRecoilQuery';
import { CATEGORY_KEY } from './key';

export const useCategoryList = () => {
  const { state, isLoading, refetch } = useRecoilQuery<Category[]>(categoryListState, CATEGORY_KEY, getCategoryList);

  return { categoryList: state, isLoadingCategoryList: isLoading, refetchCategoryList: refetch };
};
