import Link from "next/link";
import Image from "next/image";

export default function Header() {
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


        <nav className="flex items-center gap-8 text-sm font-medium text-slate-600">
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

    </header>
  );
}
