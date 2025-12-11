import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, AlertCircle, Users, Baby } from "lucide-react"

export function RequirementsSection() {
  return (
    <section id="requisitos" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Requisitos para Titulación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Conoce los documentos y condiciones necesarias para obtener tu título.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Documentación Necesaria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Acta de Nacimiento (Actualizada)",
                    "Clave Única de Registro de Población (CURP- Certificada: Verificada con el Registro Civil)",
                    "Identificación Oficial Vigente (INE)",
                    "Certificado de Nivel Medio Superior (Validado)",
                    "Currículum Vítae",
                    "Constancia de estudios con al menos 50% de créditos concluidos (Lic. en Derecho y Lic. en Contaduría)",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">Experiencia Laboral Comprobable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Es indispensable demostrar{" "}
                  <strong className="text-foreground">experiencia laboral relevante de al menos 3 años</strong> en el área de la licenciatura que deseas acreditar. Esta experiencia se valida a través de tu CV y el portafolio de evidencias.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-muted/50">
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Identificación Oficial</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Se acepta INE, pasaporte o cédula profesional vigentes. No se aceptan licencias de conducir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Baby className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Consideraciones Adicionales</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Si requieres alguna consideración especial por discapacidad o condición médica, notifícalo al iniciar tu proceso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-lg">Políticas del Proceso</h4>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  El CUH se reserva el derecho de admisión. La documentación apócrifa es causa de baja inmediata y definitiva del proceso. Los pagos realizados no son reembolsables.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
