import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Datos de ejemplo
const cursos = [
  { id: 1, nombre: "1º ESO", numAlumnos: 25, profesor: "Juan Pérez" },
  { id: 2, nombre: "2º ESO", numAlumnos: 28, profesor: "María Gómez" },
  { id: 3, nombre: "3º ESO", numAlumnos: 22, profesor: "Carlos Rodríguez" },
  { id: 4, nombre: "4º ESO", numAlumnos: 20, profesor: "Laura Fernández" },
];

export default function CursosPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión de Cursos</h1>
        <Button>Añadir Curso</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre del Curso</TableHead>
            <TableHead>Número de Alumnos</TableHead>
            <TableHead>Profesor</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cursos.map((curso) => (
            <TableRow key={curso.id}>
              <TableCell>{curso.nombre}</TableCell>
              <TableCell>{curso.numAlumnos}</TableCell>
              <TableCell>{curso.profesor}</TableCell>
              <TableCell>
                <Button variant="link">Ver</Button>
                <Button variant="link">Editar</Button>
                <Button variant="link" className="text-red-600">
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
