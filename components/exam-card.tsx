import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, Users, Calendar } from "lucide-react"

interface ExamCardProps {
  exam: {
    id: string
    nombre: string
    categoria: string
    descripcion: string
    modalidad: string
    duracion: string
    costo: string
    cupo: number
    fechaExamen: string
  }
}

export function ExamCard({ exam }: ExamCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className="font-medium">
            {exam.categoria}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {exam.modalidad}
          </Badge>
        </div>
        <CardTitle className="font-serif text-xl leading-tight text-balance">{exam.nombre}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground leading-relaxed text-pretty line-clamp-3">{exam.descripcion}</p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">{exam.duracion}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">{exam.costo}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground">Cupo: {exam.cupo}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-muted-foreground text-xs">{exam.fechaExamen}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" className="flex-1 bg-transparent">
          <Link href={`/examenes/${exam.id}`}>Ver Detalles</Link>
        </Button>
        <Button asChild className="flex-1">
          <Link href="/inscripcion">Inscribirme</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
