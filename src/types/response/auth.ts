import { LoginResponseDTO } from './login';
export type AuthResponseDTO = {
  user?: LoginResponseDTO;
  is_login: boolean;
};
