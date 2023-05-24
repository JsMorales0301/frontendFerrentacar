import type { LoginRequest } from "./login/LoginRequest";
import type { LoginResponse } from "./login/LoginResponse";


export interface AuthRepository {
    login: (credentials: LoginRequest) => Promise<LoginResponse>;
    register: () => void;
    forgotPassword: () => void;
    newPassword: () => void;
}