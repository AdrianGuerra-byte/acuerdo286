import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, FileCheck } from "lucide-react"
import examenesData from "@/data/examenes.json"

export function CalendarSection() {
  const convocatorias = [
    { mes: "Abril", numero: "12" },
    { mes: "Junio", numero: "20" },
    { mes: "Noviembre", numero: "15" }
  ];

  return (
    <section id="calendario" className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {/* Header */}
          <div className="text-center space-y-5">
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground text-balance tracking-tight leading-[1.1]">
              <span className="block">Fechas de</span>
              <span className="block text-primary">Aplicación</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
            {/* <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto pt-2">
              Los exámenes se aplican todos los <strong className="text-foreground">viernes</strong> en las siguientes fechas de 2026
            </p> */}
          </div>

          {/* Convocatorias - Cards */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {convocatorias.map((convocatoria, index) => (
              <Card
                key={index}
                className="border-2 border-muted/40 hover:border-muted/60 transition-colors hover:shadow-xl duration-300 group"
              >
                <CardContent className="p-0">
                  {/* Header del calendario */}
                  <div className="bg-primary p-4 text-center">
                    <div className="text-primary-foreground/90 text-sm font-semibold uppercase tracking-wider">
                      {convocatoria.mes} 2026
                    </div>
                  </div>

                  {/* Cuerpo del calendario */}
                  <div className="p-8 text-center space-y-3">
                    <div className="text-foreground font-serif font-extrabold text-6xl lg:text-7xl leading-none group-hover:text-primary transition-colors">
                      {convocatoria.numero}
                    </div>
                    <Badge variant="secondary" className="text-xs py-1.5 px-3">
                      Viernes
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Nota Informativa Condensada */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Importante:</strong> Las fechas específicas de registro y entrega de resultados serán confirmadas próximamente.
                  Mantente informado a través de nuestros canales oficiales.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Timeline de Proceso */}
          {/* <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl lg:text-3xl text-center text-foreground tracking-tight">
              Proceso General por Convocatoria
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border hover:border-primary/30 transition-colors">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <CalendarDays className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">1. Registro</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Periodo para inscribirte y presentar documentación
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border hover:border-secondary/30 transition-colors">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">2. Aplicación</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fecha de presentación del examen
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border hover:border-accent/30 transition-colors">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                    <FileCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">3. Resultados</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Entrega de calificaciones y certificación
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
