// prisma/seed.ts
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

// async function main() {
//   // Limpar dados antigos
//   await prisma.item.deleteMany();
//   await prisma.user.deleteMany();

//   // Criar usuários de teste
//   const passwordHash = await bcrypt.hash("123456", 10);

//   const users = await prisma.user.createMany({
//     data: [
//       {
//         name: "João Silva",
//         email: "joao@reuse.com",
//         password: passwordHash,
//       },
//       {
//         name: "Maria Lima",
//         email: "maria@reuse.com",
//         password: passwordHash,
//       },
//       {
//         name: "Carla Dev",
//         email: "carla@reuse.com",
//         password: passwordHash,
//       },
//       {
//         name: "Diego",
//         email: "diego@reuse.com",
//         password: passwordHash,
//       },
//     ],
//   });

//   console.log(`✔ Usuários criados: ${users.count}`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// prisma/seed.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password1 = await bcrypt.hash("123456", 10);
  const password2 = await bcrypt.hash("123456", 10);

  await prisma.user.createMany({
    data: [
      { name: "João Silva", email: "joao@reuse.com", password: password1 },
      { name: "Maria Lima", email: "maria@reuse.com", password: password2 },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Usuários criados com sucesso!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
