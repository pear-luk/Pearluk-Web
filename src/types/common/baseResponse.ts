export interface BaseResponseDTO<T = unknown> {
  is_success: boolean;
  message: string;
  code: number;
  status_code: number;
  result?: T;
}
