import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function globalTeardown() {
  // Elimina todos los datos de la DB
  await prisma.ticket.deleteMany();
  await prisma.purchase.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();

  await prisma.$disconnect();
}
