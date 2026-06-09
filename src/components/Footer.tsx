import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 px-8 md:px-16 py-8 flex flex-col gap-4 text-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-slate-500">
        <p>&copy; {currentYear} Pet Feliz. Todos os direitos reservados.</p>
        <p className="text-slate-400">Amor, cuidado e confiança.</p>
      </div>
    </footer>
  );
}