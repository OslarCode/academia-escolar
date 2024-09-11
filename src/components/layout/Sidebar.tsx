import Link from "next/link";
import { Home, Users, BookOpen, GraduationCap } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-4">
        <Link
          href="/"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
        >
          <Home size={20} />
          <span>Inicio</span>
        </Link>
        <Link
          href="/alumnos"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
        >
          <Users size={20} />
          <span>Alumnos</span>
        </Link>
        <Link
          href="/profesores"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
        >
          <GraduationCap size={20} />
          <span>Profesores</span>
        </Link>
        <Link
          href="/cursos"
          className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
        >
          <BookOpen size={20} />
          <span>Cursos</span>
        </Link>
      </nav>
    </aside>
  );
}
