import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersControllers {
    @UseGuards(AuthGuard('local'))
    @Get()
    async getUsers(): Promise<any> {
        return 'Some message';
    }
}
