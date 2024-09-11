import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Datos de ejemplo (en una aplicación real, estos vendrían de una API o base de datos)
const alumnos = [
  {
    id: 1,
    nombre: "Ana García",
    edad: 15,
    curso: "3º ESO",
    email: "ana.garcia@example.com",
  },
  {
    id: 2,
    nombre: "Carlos López",
    edad: 16,
    curso: "4º ESO",
    email: "carlos.lopez@example.com",
  },
  {
    id: 3,
    nombre: "María Rodríguez",
    edad: 14,
    curso: "2º ESO",
    email: "maria.rodriguez@example.com",
  },
];

export default function AlumnoDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const alumno = alumnos.find((a) => a.id === parseInt(params.id));

  if (!alumno) {
    notFound();
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h1 className="text-2xl font-bold">{alumno.nombre}</h1>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Edad:</strong> {alumno.edad} años
          </p>
          <p>
            <strong>Curso:</strong> {alumno.curso}
          </p>
          <p>
            <strong>Email:</strong> {alumno.email}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Editar</Button>
        <Button variant="destructive">Eliminar</Button>
      </CardFooter>
    </Card>
  );
}
