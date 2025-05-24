import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private Prisma: PrismaService) {}

  async signup(dto: AuthDto) {

    //generate the password hash
   const hash =  await argon.hash(dto.password);

    //save the new user in database
   const user = await this.Prisma.user.create({
    data:{
      email:dto.email,
      password: hash
    },
    select: {
      id: true,
      email: true,
      createAt: true
    }
   });
  //return saved user
  return user;

  }


  login() {
    return { msg: 'signed in' };
  }
}
