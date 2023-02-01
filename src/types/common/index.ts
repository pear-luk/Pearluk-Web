export interface ICommonInfo {
  created_at?: Date | string;
  updated_at?: Date | string;
  status?: 'ACTIVE' | 'INACTIVE' | 'DELETED';
}
