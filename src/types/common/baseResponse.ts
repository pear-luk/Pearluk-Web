export interface BaseResponseDTO<T> {
  is_success: boolean;
  message: string;
  code: number;
  status_code: number;
  result?: T;
}
