import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Clock, DollarSign, Users, Calendar, FileCheck, Target, AlertCircle, Download, ArrowLeft } from "lucide-react"
import examenesData from "@/data/examenes.json"

export function generateStaticParams() {
  return examenesData.map((exam) => ({
    id: exam.id,
  }))
}

export default function ExamenDetailPage({ params }: { params: { id: string } }) {
  const exam = examenesData.find((e) => e.id === params.id)

  if (!exam) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10 -ml-2"
            >
              <Link href="/#oferta">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Oferta de Exámenes
              </Link>
            </Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary" className="text-base">
                  {exam.categoria}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/30"
                >
                  {exam.modalidad}
                </Badge>
              </div>

              <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-balance">{exam.nombre}</h1>

              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl text-pretty">
                {exam.descripcion}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                <Clock className="w-5 h-5 text-primary-foreground/80" />
                <div className="font-semibold">{exam.duracion}</div>
                <div className="text-xs text-primary-foreground/70">Duración</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                <DollarSign className="w-5 h-5 text-primary-foreground/80" />
                <div className="font-semibold">{exam.costo}</div>
                <div className="text-xs text-primary-foreground/70">Costo</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                <Users className="w-5 h-5 text-primary-foreground/80" />
                <div className="font-semibold">{exam.cupo} personas</div>
                <div className="text-xs text-primary-foreground/70">Cupo máximo</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 space-y-2">
                <Calendar className="w-5 h-5 text-primary-foreground/80" />
                <div className="font-semibold text-sm">{exam.fechaExamen}</div>
                <div className="text-xs text-primary-foreground/70">Próxima fecha</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="objetivo" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 h-auto gap-2">
                <TabsTrigger value="objetivo" className="text-sm">
                  Objetivo
                </TabsTrigger>
                <TabsTrigger value="requisitos" className="text-sm">
                  Requisitos
                </TabsTrigger>
                <TabsTrigger value="calendario" className="text-sm">
                  Calendario
                </TabsTrigger>
                <TabsTrigger value="modalidad" className="text-sm">
                  Modalidad
                </TabsTrigger>
                <TabsTrigger value="guias" className="text-sm">
                  Guías
                </TabsTrigger>
              </TabsList>

              <TabsContent value="objetivo" className="space-y-6">
                <Card>
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className="font-serif font-bold text-2xl text-foreground">Objetivo del Examen</h3>
                        <p className="text-muted-foreground leading-relaxed text-pretty text-lg">{exam.objetivo}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requisitos" className="space-y-6">
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Requisitos</h3>
                        <ul className="space-y-3">
                          {exam.requisitos.map((req, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-sm font-semibold">{index + 1}</span>
                              </div>
                              <span className="text-muted-foreground leading-relaxed text-pretty">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">Importante</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Todos los documentos deben ser originales o copias certificadas. Verifica que cumples con cada
                          requisito antes de iniciar tu proceso de inscripción.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="calendario" className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Periodo de Registro</h4>
                        <p className="text-2xl font-serif font-bold text-primary">{exam.fechaRegistro}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Fecha de Aplicación</h4>
                        <p className="text-2xl font-serif font-bold text-secondary">{exam.fechaExamen}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <FileCheck className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Entrega de Resultados</h4>
                        <p className="text-2xl font-serif font-bold text-accent">{exam.fechaResultados}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="modalidad" className="space-y-6">
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <h3 className="font-serif font-bold text-2xl text-foreground">Modalidad: {exam.modalidad}</h3>

                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p className="text-pretty">
                        Este examen se aplica de forma{" "}
                        <strong className="text-foreground">{exam.modalidad.toLowerCase()}</strong> en las instalaciones
                        del Centro Universitario Hidalguense.
                      </p>

                      <div className="bg-muted/50 rounded-xl p-6 space-y-3">
                        <h4 className="font-semibold text-foreground">Detalles de la aplicación:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Duración total: {exam.duracion}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Se proporcionará material de examen el día de la aplicación</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Deberás presentarte 30 minutos antes del inicio</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>No se permite el uso de dispositivos electrónicos</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guias" className="space-y-6">
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-serif font-bold text-2xl text-foreground">Material de Preparación</h3>
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        Descarga las guías oficiales y material complementario para preparar tu examen
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Card className="border-2 hover:border-primary/20 transition-colors">
                        <CardContent className="p-6 flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <FileCheck className="w-6 h-6 text-primary" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="font-semibold text-foreground">Guía Oficial del Examen</h4>
                              <p className="text-sm text-muted-foreground">
                                Temario completo, ejemplos y recomendaciones
                              </p>
                              <div className="text-xs text-muted-foreground">PDF • 2.4 MB</div>
                            </div>
                          </div>
                          <Button size="sm" className="gap-2 flex-shrink-0">
                            <Download className="w-4 h-4" />
                            Descargar
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-2 hover:border-primary/20 transition-colors">
                        <CardContent className="p-6 flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Download className="w-6 h-6 text-secondary" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="font-semibold text-foreground">Material Complementario</h4>
                              <p className="text-sm text-muted-foreground">Ejercicios prácticos y casos de estudio</p>
                              <div className="text-xs text-muted-foreground">PDF • 1.8 MB</div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="gap-2 flex-shrink-0 bg-transparent">
                            <Download className="w-4 h-4" />
                            Descargar
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* CTA Section */}
            <div className="mt-12">
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center lg:text-left">
                      <h3 className="font-serif font-bold text-2xl lg:text-3xl">¿Listo para inscribirte?</h3>
                      <p className="text-primary-foreground/90 text-lg">
                        Completa tu registro en línea y asegura tu lugar
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                      <Button asChild size="lg" variant="secondary" className="font-medium">
                        <Link href="/inscripcion">Inscribirme Ahora</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="font-medium bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
                      >
                        <Link href="/#contacto">Contactar Soporte</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
