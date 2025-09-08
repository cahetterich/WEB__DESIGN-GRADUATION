import { prisma } from "@/lib/prisma";
import UserForm from "@/components/users/UserForm";

export const dynamic = "force-dynamic"; // sempre atualizar ao criar

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true, createdAt: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    // <main className="mx-auto max-w-3xl px-4 py-8 space-y-8">
    //   <header className="space-y-2">
    //     <h1 className="text-2xl font-semibold">Usuários (ReUse!)</h1>
    //     <p className="text-sm text-gray-600">
    //       Cadastre usuários fictícios para testar a integração NextJS + Prisma + Neon.
    //     </p>
    //   </header>

    //   <section className="rounded-xl border bg-white p-6 shadow-sm">
    //     <h2 className="mb-4 text-lg font-medium">Cadastrar novo usuário</h2>
    //     <UserForm />
    //   </section>

    //   <section className="rounded-xl border bg-white p-6 shadow-sm">
    //     <h2 className="mb-4 text-lg font-medium">Lista</h2>
    //     {users.length === 0 ? (
    //       <p className="text-gray-600">Nenhum usuário ainda.</p>
    //     ) : (
    //       <ul className="divide-y">
    //         {users.map((u) => (
    //           <li key={u.id} className="py-3">
    //             <div className="flex items-center justify-between">
    //               <div>
    //                 <p className="font-medium">{u.name}</p>
    //                 <p className="text-sm text-gray-600">{u.email}</p>
    //               </div>
    //               <time className="text-xs text-gray-500">
    //                 {new Date(u.createdAt).toLocaleString()}
    //               </time>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </section>
    // </main>

<main className="mx-auto max-w-3xl px-4 py-10 space-y-10">
 <header className="w-full bg-white border-b border-gray-200 shadow-sm">
  <div className="mx-auto max-w-5xl px-6 py-3 flex justify-between items-center">
    <h1 className="text-lg font-bold text-green-700">ReUse!</h1>
    <nav className="space-x-4 text-sm">
      <a href="/" className="text-gray-700 hover:text-green-700">Home</a>
      <a href="/users" className="text-gray-700 hover:text-green-700">Usuários</a>
    </nav>
  </div>
</header>


  <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
    <h2 className="mb-4 text-lg font-semibold text-gray-700">
      Cadastrar novo usuário
    </h2>
    <UserForm />
  </section>

  <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
    <h2 className="mb-4 text-lg font-semibold text-gray-700">Lista</h2>
    {users.length === 0 ? (
      <p className="text-gray-500">Nenhum usuário ainda.</p>
    ) : (
      <ul className="divide-y divide-gray-200">
        {users.map((u) => (
          <li key={u.id} className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">{u.name}</p>
                <p className="text-sm text-gray-600">{u.email}</p>
              </div>
              <time className="text-xs text-gray-500">
                {new Date(u.createdAt).toLocaleString()}
              </time>
            </div>
          </li>
        ))}
      </ul>
    )}
  </section>
</main>


  );
}
