import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, BookOpen, Award } from "lucide-react";

export function Acuerdo286Section() {
  return (
    <section
      id="acuerdo-286"
      className="py-20 lg:py-28 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-20">
          {/* Header */}
          <div className="text-center space-y-5">
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground text-balance tracking-tight leading-[1.1]">
              <span className="block">¿Qué es el</span>
              <span className="block text-primary">Acuerdo 286?</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Definition Card */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors hover:shadow-xl duration-300 group">
            <CardContent className="p-8 lg:p-10 space-y-6">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                <div className="space-y-6">
                  <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty font-normal">
                    <strong className="text-primary font-semibold text-lg lg:text-xl">
                      Acuerdo 286:
                    </strong>{" "}
                    El marco normativo que permite el reconocimiento oficial de
                    conocimientos y estudios adquiridos fuera del sistema
                    escolar formal.
                  </p>
                  <div className="space-y-4">
                    <p className="text-base lg:text-lg text-foreground/80 font-medium">
                      Establece los procedimientos para:
                    </p>
                    <ul className="space-y-3 pl-2">
                      <li className="flex items-start gap-3">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                          Revalidar o homologar estudios.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary text-xl mt-0.5">•</span>
                        <span className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                          Acreditar aprendizajes obtenidos mediante experiencia
                          laboral, formación autodidacta o capacitación para el
                          trabajo.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-base lg:text-lg text-foreground/90 leading-relaxed text-pretty font-normal">
                    <strong className="text-primary font-semibold text-lg lg:text-xl">
                      Su objetivo:
                    </strong>{" "}
                    Validar los saberes para facilitar la continuidad educativa
                    y la certificación formal.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subsections Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Acredita tu Licenciatura */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors hover:shadow-xl duration-300 group">
              <CardContent className="p-8 lg:p-10 space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground tracking-tight">
                  Acredita tu Licenciatura
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                  Valida tu experiencia profesional y conocimientos para obtener
                  tu título de licenciatura. Reconoce el aprendizaje autodidacta
                  y la práctica laboral.
                </p>
                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-lg mt-0.5">•</span>
                    <span className="text-sm lg:text-base text-muted-foreground">
                      Validación de experiencia laboral
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-lg mt-0.5">•</span>
                    <span className="text-sm lg:text-base text-muted-foreground">
                      Título profesional con validez oficial
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-lg mt-0.5">•</span>
                    <span className="text-sm lg:text-base text-muted-foreground">
                      Múltiples áreas de conocimiento disponibles
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Who Can Apply */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors hover:shadow-xl duration-300 group">
              <CardContent className="p-8 lg:p-10 space-y-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground tracking-tight">
                  ¿Quiénes pueden presentarlo?
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                  Personas que adquirieron conocimientos de forma autodidacta o
                  por experiencia laboral en el área y buscan acreditar algún
                  perfil autorizado de educación superior.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
