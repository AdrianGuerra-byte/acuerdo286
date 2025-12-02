import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span>Centro aplicador autorizado por la SEP</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
                Titúlate por Experiencia Laboral con Acuerdo 286
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light text-pretty">
                Obtén tu título universitario validando tus conocimientos y experiencia profesional.
              </p>
            </div>

            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl text-pretty">
              El Centro Universitario Hidalguense te ofrece la oportunidad de obtener tu título de Licenciatura a través del Acuerdo 286 de la SEP, reconociendo la experiencia que ya tienes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base font-medium">
                <Link href="/#oferta">Consulta la Oferta de Exámenes</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <Link href="/inscripcion">Inscríbete Aquí</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="space-y-1">
                <div className="text-3xl font-bold font-serif">500+</div>
                <div className="text-sm text-primary-foreground/70">Certificaciones</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold font-serif">15+</div>
                <div className="text-sm text-primary-foreground/70">Años de Experiencia</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold font-serif">98%</div>
                <div className="text-sm text-primary-foreground/70">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/students-taking-examination-in-professional-univer.jpg"
              alt="Estudiantes durante evaluación"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />

            {/* Floating Cards */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Próxima fecha de examen</div>
                  <div className="text-sm text-muted-foreground">5 de abril de 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
