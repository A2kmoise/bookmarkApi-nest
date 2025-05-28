import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { User } from 'generated/prisma';
import { use } from 'passport';


@Controller('users')
export class UserController { 
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(
        @GetUser() user:User ){  
        return user; 
    }

    @Patch()
    editUser() {}
}
