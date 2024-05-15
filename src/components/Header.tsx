import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-4 bg-slate-800 pt-8 sticky top-0 z-10 shadow-md shadow-color-primary">
      <h1 className="font-bold text-sky-100 text-2xl md:text-4xl mb-4">BlessedFm</h1>
      <nav className="flex justify-center gap-8 py-2 w-full bg-slate-300">
        <Link
          href=""
          className="hover:text-sky-100 font-mono transition-all md:text-2xl"
        >
          Sobre
        </Link>
        <Link
          href="#Products"
          className="hover:text-sky-100 font-mono transition-all md:text-2xl"
        >
          Produtos
        </Link>
        <Link
          href="#Services"
          className="hover:text-sky-100 font-mono transition-all md:text-2xl"
        >
          Serviços
        </Link>
      </nav>
    </header>
  );
}
