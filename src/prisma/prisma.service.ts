import { Injectable } from "@nestjs/common";
import { PrismaClient } from "../../generated/prisma/client";

@Injectable()

export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres:moi%23se@localhost:5432/nest"
                }
            }
        })
    }
}