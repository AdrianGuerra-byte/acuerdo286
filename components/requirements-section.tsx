import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileCheck, AlertCircle, Users, Baby } from "lucide-react"

export function RequirementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Requisitos Generales
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Conoce los documentos y condiciones necesarias para tu inscripción
            </p>
          </div>

          <Tabs defaultValue="acredita-bach" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 h-auto">
              <TabsTrigger value="acredita-bach" className="text-base py-3">
                Acredita-Bach
              </TabsTrigger>
              <TabsTrigger value="licenciatura" className="text-base py-3">
                Acredita para Licenciatura
              </TabsTrigger>
            </TabsList>

            <TabsContent value="acredita-bach" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Documentación Necesaria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Acta de nacimiento original y copia",
                      "CURP actualizada",
                      "Identificación oficial vigente con fotografía (INE, pasaporte)",
                      "Certificado de secundaria original y copia",
                      "Comprobante de domicilio no mayor a 3 meses",
                      "Comprobante de pago",
                      "4 fotografías tamaño infantil a color",
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
                  <CardTitle className="font-serif text-xl">Edad Mínima</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Debes ser mayor de <strong className="text-foreground">18 años cumplidos</strong> al momento de
                    presentar el examen.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="licenciatura" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Documentación Necesaria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Acta de nacimiento original y copia",
                      "CURP actualizada",
                      "Identificación oficial vigente con fotografía (INE, pasaporte)",
                      "Certificado de bachillerato original y copia",
                      "Carta de exposición de motivos",
                      "Curriculum vitae detallado",
                      "Cartas de recomendación laboral (mínimo 2)",
                      "Constancias que acrediten experiencia laboral mínima de 3 años",
                      "Comprobante de pago",
                      "6 fotografías tamaño infantil a color",
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FileCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Experiencia Laboral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Es indispensable comprobar{" "}
                    <strong className="text-foreground">experiencia laboral mínima de 3 años</strong> en el área de
                    conocimiento de la licenciatura que deseas acreditar, mediante constancias laborales, contratos o
                    documentos que validen tu trayectoria profesional.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Additional Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-muted/50">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Identificación Aceptada</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Se acepta credencial del INE vigente, pasaporte vigente o cédula profesional. No se aceptan
                      licencias de conducir ni identificaciones escolares.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Baby className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Consideraciones Especiales</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Si requieres consideraciones especiales por embarazo, discapacidad o condición médica, debes
                      notificarlo al momento de tu inscripción.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-lg">Políticas de Participación</h4>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  El CUH se reserva el derecho de cancelar la participación de candidatos que no cumplan con los
                  requisitos establecidos o que presenten documentación falsa. Todos los documentos serán verificados
                  por personal autorizado. El pago realizado no es reembolsable bajo ninguna circunstancia.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
