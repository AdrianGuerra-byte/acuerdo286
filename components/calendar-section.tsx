import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, FileCheck } from "lucide-react"
import examenesData from "@/data/examenes.json"

export function CalendarSection() {
  return (
    <section id="calendario" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Fechas de Registro y Aplicación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Planifica tu evaluación con nuestro calendario de fechas importantes
            </p>
          </div>

          {/* Calendar Cards */}
          <div className="grid gap-6">
            {examenesData.map((exam) => (
              <Card
                key={exam.id}
                className="overflow-hidden border-2 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <CardHeader className="bg-muted/50 pb-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-2">
                      <CardTitle className="font-serif text-xl text-balance">{exam.nombre}</CardTitle>
                      <Badge variant="secondary">{exam.categoria}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CalendarDays className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">Pe riodo de Registro</div>
                        <div className="font-semibold text-foreground">{exam.fechaRegistro}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">Fecha de Aplicación</div>
                        <div className="font-semibold text-foreground">{exam.fechaExamen}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-muted-foreground">Entrega de Resultados</div>
                        <div className="font-semibold text-foreground">{exam.fechaResultados}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
