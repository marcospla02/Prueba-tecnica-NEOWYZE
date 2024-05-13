"use client";
import Link from "next/link";
import Logo from "@/assets/neowyze_only_logo.webp";
import { usePathname } from "next/navigation";

// Componente de diseño para reutilizarlo en distintas paginas.
const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Comparamos la URL actual con la URL del boton para dejar marcado el boton.
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background ">
      <header className="bg-headerBg text-text py-2">
        <div className="container mx-auto flex justify-between items-center px-2">
          <Link href="/">
            <img src={Logo.src} alt="Logo" className="lg:size-16 md:size-12 sm:size-8 max-w-16 size-8" />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/peliculas"
                  className={`${
                    isActive("/peliculas")
                      ? "text-buttonTextDecoration"
                      : "text-text"
                  } hover:text-buttonTextDecoration font-bold py-2 px-4 text-lg`}
                >
                  Películas
                </Link>
              </li>
              <li>
                <Link
                  href="/personajes"
                  className={`${
                    isActive("/personajes")
                      ? "text-buttonTextDecoration"
                      : "text-text"
                  } hover:text-buttonTextDecoration font-bold py-2 px-4 text-lg`}
                >
                  Personajes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8">{children}</main>
      <footer className="bg-header-bg-color text-text-color py-4">
        <div className="container mx-auto text-center">
          Powered by <span className="font-bold">Marcos Pla Señorans</span> 😆
        </div>
      </footer>
    </div>
  );
};

export default LayoutMain;
