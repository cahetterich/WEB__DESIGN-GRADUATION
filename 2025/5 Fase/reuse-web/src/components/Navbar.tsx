// src/components/Navbar.tsx

'use client';
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar(){
const [open, setOpen] = useState(false);


return (
<header className="w-full bg-white border-b border-gray-200">
<div className="container-reuse flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<Link href="/" className="text-lg font-bold text-reuse-green-900">ReUse!</Link>
<span className="text-sm text-gray-500">reuso e comunidade</span>
</div>


<nav className="hidden md:flex items-center gap-6 text-sm">
<Link href="/" className="text-gray-700 hover:text-reuse-green-900">Home</Link>
<Link href="/explore" className="text-gray-700 hover:text-reuse-green-900">Explorar</Link>
<Link href="/about" className="text-gray-700 hover:text-reuse-green-900">Sobre</Link>
<Link href="/users" className="text-gray-700 hover:text-reuse-green-900">Usuários</Link>
</nav>


<div className="hidden md:flex items-center gap-3">
<Link href="/login" className="px-4 py-2 rounded-md border border-gray-200 text-sm">Entrar</Link>
<Link href="/signup" className="px-4 py-2 rounded-md bg-reuse-green-500 text-white text-sm hover:bg-reuse-green-700">Cadastrar</Link>
</div>


{/* mobile menu button */}
<button className="md:hidden inline-flex items-center rounded-md p-2" onClick={()=>setOpen(!open)} aria-label="Abrir menu">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open? "M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"} /></svg>
</button>
</div>


{/* mobile menu */}
{open && (
<div className="md:hidden border-t border-gray-100 bg-white">
<div className="flex flex-col p-4 gap-2">
<Link href="/" className="py-2">Home</Link>
<Link href="/explore" className="py-2">Explorar</Link>
<Link href="/about" className="py-2">Sobre</Link>
<div className="flex gap-2 pt-2">
<Link href="/login" className="flex-1 text-center rounded-md border py-2">Entrar</Link>
<Link href="/signup" className="flex-1 text-center rounded-md bg-reuse-green-500 text-white py-2">Cadastrar</Link>
</div>
</div>
</div>
)}
</header>
);
}