import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, BookOpen, Award } from "lucide-react"

export function Acuerdo286Section() {
  return (
    <section id="acuerdo-286" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              ¿Qué es el Acuerdo 286?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              Conoce cómo puedes acreditar tus conocimientos y obtener certificación oficial
            </p>
          </div>

          {/* Definition Card */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <p className="text-lg leading-relaxed text-foreground text-pretty">
                <strong className="text-primary font-semibold">Acuerdo 286:</strong> Lineamientos de la SEP que permiten
                acreditar conocimientos adquiridos de forma autodidacta o por experiencia laboral mediante exámenes
                aplicados por centros evaluadores autorizados. Facilita obtener certificados o títulos oficiales en
                niveles medio superior y superior sin cursar completamente un programa escolarizado.
              </p>
            </CardContent>
          </Card>

          {/* Subsections */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">Acredita-Bach</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Certifica tu bachillerato mediante un examen integral que evalúa conocimientos equivalentes al nivel
                  medio superior. Ideal para quienes no completaron sus estudios de preparatoria.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Evaluación en matemáticas, ciencias y comunicación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Certificado con validez oficial SEP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Permite continuar estudios superiores</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">Acredita para Licenciatura</h3>
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
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-foreground">¿Quiénes pueden presentarlo?</h3>
                  <div className="space-y-2 text-muted-foreground leading-relaxed">
                    <p className="text-pretty">
                      <strong className="text-foreground">Para Acredita-Bach:</strong> Personas mayores de 18 años que
                      no concluyeron o no cursaron el bachillerato y desean obtener su certificado de preparatoria.
                    </p>
                    <p className="text-pretty">
                      <strong className="text-foreground">Para Licenciatura:</strong> Profesionistas con experiencia
                      laboral comprobable de al menos 3 años en su área, que adquirieron conocimientos de forma
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
