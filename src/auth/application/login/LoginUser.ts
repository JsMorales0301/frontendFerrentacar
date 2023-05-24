import type { LoginResponse } from '@/auth/domain/login/LoginResponse';
import type { AuthRepository } from '../../domain/AuthRepository';
import type { LoginRequest } from '../../domain/login/LoginRequest';

export async function LoginUser( 
    authRepository: AuthRepository, 
    loginRequest: LoginRequest 
): Promise<LoginResponse> {
    return await authRepository.login(loginRequest)
}