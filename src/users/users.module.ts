import { Module } from '@nestjs/common';

import { UsersControllers } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
    controllers: [UsersControllers],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
