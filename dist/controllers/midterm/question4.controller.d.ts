import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { UsersService } from 'server/providers/services/users.service';
export declare class Question4Controller {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(jwtBody: JwtBodyDto): Promise<{
        users: import("../../entities/user.entity").User[];
    }>;
}
