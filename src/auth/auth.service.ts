import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "../../generated/prisma/client"

@Injectable({})
export class AuthService{
 signup(){
    return ('Signed up');
 }

 login() {
    return ('signed in');
 }
}
