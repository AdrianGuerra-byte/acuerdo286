import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, BookOpen, Award } from "lucide-react"

export function Acuerdo286Section() {
  return (
    <section id="acuerdo-286" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              ¿Qué es el Acuerdo 286?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              Conoce cómo puedes obtener tu Título Universitario gracias a tu experiencia profesional.
            </p>
          </div>

          {/* Definition Card */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent>
              <p className="text-lg leading-relaxed text-foreground text-pretty">
                <strong className="text-primary font-semibold">Acuerdo 286:</strong> Son los lineamientos emitidos por la Secretaría de Educación Pública (SEP) que te permiten obtener un título universitario al demostrar que cuentas con los conocimientos y habilidades necesarios, adquiridos a través de tu experiencia laboral o de forma autodidacta, sin necesidad de cursar un programa universitario tradicional.
              </p>
            </CardContent>
          </Card>

          {/* Subsections */}
          <div className="grid md:grid-cols-1 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">Titulación por Experiencia Laboral</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Valida tu experiencia profesional y conocimientos para obtener tu título de licenciatura. Reconoce el
                  aprendizaje autodidacta y la práctica laboral.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Validación de experiencia laboral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Título profesional con validez oficial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Múltiples áreas de conocimiento disponibles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Who Can Apply */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-foreground">¿Quiénes pueden presentarlo?</h3>
                  <div className="space-y-2 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      Profesionistas con experiencia laboral comprobable de al menos 3 años en su área, que adquirieron conocimientos de forma
                      autodidacta o práctica y buscan un título oficial.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
