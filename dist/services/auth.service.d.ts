import { UserRegisterDTO } from "../interfaces/user.register.dto";
import { UserLoginDTO } from "../interfaces/user.login.dto";
export declare class AuthService {
    register(data: UserRegisterDTO): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
    login(data: UserLoginDTO): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    getMe(userId: string): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
    refresh(refreshToken: string): Promise<string>;
}
export declare const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map