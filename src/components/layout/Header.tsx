import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Academia Escolar</h1>
        <nav>
          <ul className="flex space-x-4">
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
        </nav>
      </div>
    </header>
  );
}
