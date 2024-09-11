import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Academia Escolar</h1>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/alumnos"
                className="text-gray-600 hover:text-gray-900"
              >
                Alumnos
              </Link>
            </li>
            <li>
              <Link
                href="/profesores"
                className="text-gray-600 hover:text-gray-900"
              >
                Profesores
              </Link>
            </li>
            <li>
              <Link
                href="/cursos"
                className="text-gray-600 hover:text-gray-900"
              >
                Cursos
              </Link>
            </li>
          </ul>
          {session && <Button onClick={() => signOut()}>Cerrar sesión</Button>}
        </nav>
      </div>
    </header>
  );
}
