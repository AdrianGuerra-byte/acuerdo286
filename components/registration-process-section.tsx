import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserCircle, FileUp, CreditCard, CheckCircle, Book, Award } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Solicitud de Admisión",
    description: "Completa el formulario con tus datos y selecciona la licenciatura que deseas acreditar.",
    icon: UserCircle,
    color: "primary",
  },
  {
    number: 2,
    title: "Carga de Documentos",
    description: "Sube tu CV, certificado de bachillerato, CURP e identificación oficial.",
    icon: FileUp,
    color: "secondary",
  },
  {
    number: 3,
    title: "Portafolio de Evidencias",
    description: "Integra y presenta tu portafolio demostrando tu experiencia y competencias.",
    icon: Book,
    color: "accent",
  },
  {
    number: 4,
    title: "Evaluación y Pago",
    description: "Tu portafolio será evaluado. Una vez aprobado, realiza el pago correspondiente.",
    icon: CreditCard,
    color: "primary",
  },
  {
    number: 5,
    title: "Titulación",
    description: "Al aprobar la evaluación, se iniciará el trámite para la emisión de tu Título Profesional.",
    icon: Award,
    color: "secondary",
  },
]

export function RegistrationProcessSection() {
  return (
    <section id="proceso" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Proceso de Titulación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Sigue estos pasos para obtener tu Título Universitario por experiencia laboral.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div
              className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border"
              style={{ left: "10%", right: "10%" }}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative">
                    <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="relative">
                            <div
                              className={`w-16 h-16 bg-${step.color}/10 rounded-full flex items-center justify-center relative z-10`}
                            >
                              <Icon className={`w-8 h-8 text-${step.color}`} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-20">
                              {step.number}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h3 className="font-serif font-bold text-lg text-foreground">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button asChild size="lg" className="text-base font-medium">
              <Link href="/inscripcion">Inicia tu Proceso de Titulación</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
