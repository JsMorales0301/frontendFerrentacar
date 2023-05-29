import { AxiosSingleton } from '@/api/AxiosSingleton'
import { authEndpoints } from '../endpoints/authEndpoints'
import type { LoginRequest } from '../interfaces/loginRequest'

export const useAuth = () => {
    const loginUser = async (credentials: LoginRequest) => {}

    return { loginUser }
}
