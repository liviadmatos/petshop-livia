'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 border-b border-slate-200 px-8 md:px-16 shadow-sm backdrop-blur-sm flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logoo.png"
            alt="Logo da empresa"
            width={200}
            height={200}
            className="h-16 w-auto object-contain"
          />
          <h1 className="text-2xl font-extrabold tracking-tight text-primary">
            Elo
          </h1>
        </div>


        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/produtos" className="transition-colors hover:text-primary">
            Produtos
          </Link>
          <Link href="/contato" className="transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>

        <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 hover:text-[#C88E82] transition-colors focus:outline-none"
        aria-label={ isOpen ? "Fechar menu" : "Abrir menu"}>
          { isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
        {/* menu mobile renderização condicional*/}
        { isOpen && (
          <nav className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40 items-center justify-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contato
          </Link>
        </nav>
        ) }


    </header>
  );
}
