import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.user.findMany({
    include: {
        document: true
    }
});
