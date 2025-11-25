import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, BookOpen, Folder } from "lucide-react"

const materials = [
  {
    id: 1,
    title: "Guía de Proceso de Titulación",
    description: "Documento que detalla paso a paso el proceso para obtener tu título universitario por experiencia.",
    icon: FileText,
    size: "1.5 MB",
  },
  {
    id: 2,
    title: "Cuadernillos de Preparación",
    description: "Material de apoyo con ejercicios y casos prácticos para reforzar tus conocimientos.",
    icon: BookOpen,
    size: "4.2 MB",
  },
  {
    id: 3,
    title: "Temarios por Licenciatura",
    description: "Contenidos temáticos específicos para cada una de las licenciaturas ofertadas.",
    icon: Folder,
    size: "2.1 MB",
  },
  {
    id: 4,
    title: "Recursos Adicionales",
    description: "Bibliografía recomendada, enlaces de interés y herramientas de estudio complementarias.",
    icon: Download,
    size: "1.2 MB",
  },
]

export function MaterialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Guías y Material de Preparación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
              Descarga gratuitamente nuestros materiales de estudio para preparar tu examen
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {materials.map((material) => {
              const Icon = material.icon
              return (
                <Card key={material.id} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg text-foreground leading-tight">{material.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{material.description}</p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-muted-foreground">{material.size}</span>
                          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                            <Download className="w-4 h-4" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
