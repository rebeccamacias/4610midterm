import { JwtService } from 'server/providers/services/jwt.service';
import { RefreshTokensService } from 'server/providers/services/refresh_tokens.service';
import { RolesService } from 'server/providers/services/roles.service';
import { UsersService } from 'server/providers/services/users.service';
export declare class UsersController {
    private usersService;
    private rolesService;
    private jwtService;
    private refreshTokenService;
    constructor(usersService: UsersService, rolesService: RolesService, jwtService: JwtService, refreshTokenService: RefreshTokensService);
}
