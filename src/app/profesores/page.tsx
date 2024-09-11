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
const profesores = [
  {
    id: 1,
    nombre: "Juan Pérez",
    asignatura: "Matemáticas",
    email: "juan.perez@academia.com",
  },
  {
    id: 2,
    nombre: "María Gómez",
    asignatura: "Lengua",
    email: "maria.gomez@academia.com",
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    asignatura: "Ciencias",
    email: "carlos.rodriguez@academia.com",
  },
  {
    id: 4,
    nombre: "Laura Fernández",
    asignatura: "Historia",
    email: "laura.fernandez@academia.com",
  },
];

export default function ProfesoresPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión de Profesores</h1>
        <Button>Añadir Profesor</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Asignatura</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profesores.map((profesor) => (
            <TableRow key={profesor.id}>
              <TableCell>{profesor.nombre}</TableCell>
              <TableCell>{profesor.asignatura}</TableCell>
              <TableCell>{profesor.email}</TableCell>
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
