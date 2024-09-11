import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AlumnoList from "@/components/alumnos/AlumnoList";

// Datos de ejemplo (en una aplicación real, estos vendrían de una API o base de datos)
const alumnos = [
  { id: 1, nombre: "Ana García", edad: 15, curso: "3º ESO" },
  { id: 2, nombre: "Carlos López", edad: 16, curso: "4º ESO" },
  { id: 3, nombre: "María Rodríguez", edad: 14, curso: "2º ESO" },
];

export default function AlumnosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión de Alumnos</h1>
        <Button>Añadir Alumno</Button>
      </div>
      <AlumnoList alumnos={alumnos} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Edad</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alumnos.map((alumno) => (
            <TableRow key={alumno.id}>
              <TableCell>{alumno.nombre}</TableCell>
              <TableCell>{alumno.edad}</TableCell>
              <TableCell>{alumno.curso}</TableCell>
              <TableCell>
                <Link
                  href={`/alumnos/${alumno.id}`}
                  className="text-blue-600 hover:underline mr-2"
                >
                  Ver
                </Link>
                <button className="text-red-600 hover:underline">
                  Eliminar
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
