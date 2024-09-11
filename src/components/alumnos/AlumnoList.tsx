import AlumnoCard from "./AlumnoCard";

interface Alumno {
  id: number;
  nombre: string;
  edad: number;
  curso: string;
}

interface AlumnoListProps {
  alumnos: Alumno[];
}

export default function AlumnoList({ alumnos }: AlumnoListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {alumnos.map((alumno) => (
        <AlumnoCard
          key={alumno.id}
          id={alumno.id}
          nombre={alumno.nombre}
          edad={alumno.edad}
          curso={alumno.curso}
        />
      ))}
    </div>
  );
}
