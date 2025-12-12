"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="quienes-somos"
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {/* Header */}
          <div className="text-center space-y-5">
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground text-balance tracking-tight leading-[1.1]">
              <span className="block">¿Quiénes</span>
              <span className="block text-primary">Somos?</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Main Content - 4 Symmetric Blocks */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Text Content Block */}
            <Card className="border-2 border-muted/40 hover:border-muted/60 transition-colors hover:shadow-xl duration-300 group">
              <CardContent className="p-8 lg:p-10 space-y-5 flex flex-col justify-center h-full">
                <div className="relative space-y-6">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                  <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty font-normal">
                    En el{" "}
                    <strong className="text-primary font-semibold">
                      Centro Universitario Hidalguense
                    </strong>{" "}
                    estamos comprometidos, como una Institución de Educación
                    Superior (IES), a impulsar la formación integral de nuestros
                    estudiantes a través de un modelo educativo centrado en su
                    desarrollo humano y profesional.
                  </p>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                    Proporcionamos un entorno de alto nivel académico y
                    excelencia que les permita alcanzar su máximo potencial,
                    formando profesionistas preparados para los desafíos del
                    mundo actual.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Image Block */}
            <Card className="border-2 border-muted/40 hover:border-muted/60 transition-colors hover:shadow-xl duration-300 overflow-hidden group relative min-h-[300px] md:min-h-[400px]">
              <CardContent className="p-0 h-full">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
                  <img
                    src="/cuh_edificio.avif"
                    alt="Centro Universitario Hidalguense"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/students-taking-examination-in-professional-univer.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent" />
                </div>
              </CardContent>
            </Card>

            {/* Mission Block */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors hover:shadow-xl duration-300 group">
              <CardContent className="p-8 lg:p-10 space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground tracking-tight">
                  Misión
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                  Formar personas libres y humanistas con pensamiento crítico
                  mediante una sólida preparación científica, técnica y
                  cultural, promoviendo en ellos aptitudes alineadas al respeto,
                  la solidaridad, honestidad y resiliencia lo que les permitirá
                  alta competitividad profesional para una mejor convivencia y
                  eficaz transformación de la sociedad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors hover:shadow-xl duration-300 group">
              <CardContent className="p-8 lg:p-10 space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground tracking-tight">
                  Visión
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                  Ser el centro de evaluación líder en el estado de Hidalgo,
                  reconocido por su excelencia, innovación y compromiso con la
                  validación de competencias profesionales bajo los más altos
                  estándares de calidad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
