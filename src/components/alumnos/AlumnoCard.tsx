import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AlumnoCardProps {
  id: number;
  nombre: string;
  edad: number;
  curso: string;
}

export default function AlumnoCard({
  id,
  nombre,
  edad,
  curso,
}: AlumnoCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">{nombre}</h3>
        <p className="text-sm text-gray-600">Edad: {edad} años</p>
        <p className="text-sm text-gray-600">Curso: {curso}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3">
        <Link href={`/alumnos/${id}`} passHref>
          <Button variant="link" className="mr-2">
            Ver detalles
          </Button>
        </Link>
        <Button variant="outline">Editar</Button>
      </CardFooter>
    </Card>
  );
}
