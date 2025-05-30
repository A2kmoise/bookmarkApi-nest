import {
  Controller,
  Get,
  Patch,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { User } from 'generated/prisma';
import { use } from 'passport';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('Id') userId: number, @Body() dto: EditUserDto) {}
}
