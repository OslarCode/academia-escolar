/*import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-500 space-y-6">
      <h1 className="text-3xl font-bold">
        Bienvenido a la Gestión de Academia Escolar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/alumnos"
          className="p-6 bg-black rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Gestión de Alumnos</h2>
          <p>Administra la información de los estudiantes.</p>
        </Link>
        <Link
          href="/profesores"
          className="p-6 bg-black rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Gestión de Profesores</h2>
          <p>Administra la información de los profesores.</p>
        </Link>
        <Link
          href="/cursos"
          className="p-6 bg-black rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Gestión de Cursos</h2>
          <p>Administra los cursos disponibles.</p>
        </Link>
      </div>
    </div>
  );
}*/

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Bienvenido a la aplicación</h1>
      <Link href="/login" className="text-blue-500 hover:underline">
        Ir al login
      </Link>
    </div>
  );
}
