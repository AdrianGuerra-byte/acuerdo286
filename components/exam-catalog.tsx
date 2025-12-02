import { ExamCard } from "./exam-card"
import examenesData from "@/data/examenes.json"

export function ExamCatalog() {
  return (
    <section id="oferta" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Licenciaturas por Experiencia Laboral
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Elige la licenciatura que deseas acreditar y obtén tu título universitario.
            </p>
          </div>

          {/* Exam Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examenesData.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
