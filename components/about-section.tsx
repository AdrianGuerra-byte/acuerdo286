"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Target,
  BookOpen,
  Shield,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelencia Académica",
    description:
      "Comprometidos con los más altos estándares de calidad educativa y evaluación profesional.",
  },
  {
    icon: Shield,
    title: "Validez Oficial",
    description:
      "Centro aplicador autorizado por la SEP con reconocimiento oficial para titulación.",
  },
  {
    icon: Users,
    title: "Experiencia Comprobada",
    description:
      "Más de 15 años respaldando profesionistas en su proceso de titulación.",
  },
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description:
      "Atención individualizada para garantizar el éxito en tu proceso de evaluación.",
  },
  {
    icon: BookOpen,
    title: "Apoyo Integral",
    description: "Materiales de estudio y guías completas para tu preparación.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Educativa",
    description:
      "Procesos modernos y eficientes adaptados a las necesidades actuales.",
  },
];

export function AboutSection() {
  return (
    <section id="quienes-somos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              ¿Quiénes Somos?
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
              
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    En el{" "}
                    <strong className="text-foreground">
                      Centro Universitario Hidalguense
                    </strong>{" "}
                    estamos comprometidos, como una Institución de 
                    Educación Superior (IES), a impulsar la formación
                     integral de nuestros estudiantes a través de un modelo 
                     educativo centrado en su desarrollo humano y profesional, 
                     proporcionando un entorno de alto nivel académico y excelencia 
                     que les permita alcanzar su máximo potencial.
                  </p>  
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold font-serif text-primary">
                    5000+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Profesionistas Titulados
                  </div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold font-serif text-primary">
                    23+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Años de Experiencia
                  </div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-3xl font-bold font-serif text-primary">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Tasa de Éxito
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/cuh-building.jpg"
                  alt="Centro Universitario Hidalguense"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/students-taking-examination-in-professional-univer.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">
                  Misión
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Formar personas libres y humanistas con pensamiento crítico mediante 
                  una sólida preparación científica, técnica y cultural, promoviendo en
                   ellos aptitudes alineadas al respeto, la solidaridad, honestidad y
                    resiliencia lo que les permitirá alta competitividad profesional para 
                    una mejor convivencia y eficaz transformación de la sociedad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">
                  Visión
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Ser el centro de evaluación líder en el estado de Hidalgo,
                  reconocido por su excelencia, innovación y compromiso con la
                  validación de competencias profesionales bajo los más altos
                  estándares de calidad.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-2xl text-foreground text-center">
              Nuestros Valores
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
