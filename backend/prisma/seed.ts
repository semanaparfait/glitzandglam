import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        fullname: "Semana",
        email: "semana@gmail.com",
        password: "123",
      },
      {
        fullname: "Espoir",
        email: "espoir@gmail.com",
        password: "1234",
      },
    ],
  });

  console.log("Database seeded successfully 🌱");
}

seed()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
