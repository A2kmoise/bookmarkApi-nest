import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "../../generated/prisma/client"
import { PrismaService } from "../prisma/prisma.service";

@Injectable({})
export class AuthService {
   constructor(private Prisma: PrismaService) {
   }
   signup() {
      return { msg: 'Signed up' }
   }

   login() {
      return { msg: 'signed in' }
   }
}
