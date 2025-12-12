import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-primary-foreground/20 shadow-lg">
              <Award className="w-4 h-4 flex-shrink-0" />
              <span className="leading-tight">
                Institución Evaluadora por Acuerdo 286 Autorizada por DGAIR
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-5 lg:space-y-7">
              <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-balance tracking-[-0.02em] drop-shadow-lg">
                <span className="block text-primary-foreground/95 mb-2 lg:mb-3">
                  EXAMEN ÚNICO DE
                </span>
                <span className="block text-primary-foreground text-shadow-md">
                  ACREDITACIÓN DE
                </span>
                <span className="block text-primary-foreground/95 mt-1 lg:mt-2">
                  LICENCIATURA CUH
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground/80 font-semibold mt-3 lg:mt-4 tracking-wide">
                  (EXUNAL-CUH)
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-primary-foreground/85 font-normal leading-relaxed text-pretty max-w-2xl border-l-4 border-primary-foreground/30 pl-5 lg:pl-6">
                Evalúa tus conocimientos en el Centro Universitario Hidalguense
                (CUH) y obtén tu título con Validez Oficial ante la Secretaría
                de Educación Pública (SEP).
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/#oferta">
                  Consulta Nuestros Perfiles Autorizados
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all hover:scale-105"
              >
                <Link href="/inscripcion">Inscríbete Aquí</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative lg:h-[550px] md:h-[450px] h-[350px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/students-taking-examination-in-professional-univer.jpg"
                alt="Estudiantes durante evaluación"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />

              {/* Decorative border */}
              <div className="absolute inset-0 border-4 border-primary-foreground/10 rounded-2xl lg:rounded-3xl" />
            </div>

            {/* Floating decoration element */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="hidden lg:block absolute -top-6 -left-6 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
