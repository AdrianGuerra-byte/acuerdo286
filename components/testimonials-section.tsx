"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import testimoniosData from "@/data/testimonios.json"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimoniosData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimoniosData.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonio = testimoniosData[currentIndex]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Testimonios y Casos de Éxito
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Conoce las historias de quienes lograron sus metas con el Acuerdo 286
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <Card className="border-2 border-border shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto bg-muted">
                    <img
                      src={currentTestimonio.imagen || "/placeholder.svg"}
                      alt={currentTestimonio.nombre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                    <Quote className="w-12 h-12 text-primary/20" />

                    <p className="text-lg leading-relaxed text-foreground text-pretty">
                      "{currentTestimonio.testimonio}"
                    </p>

                    <div className="space-y-1">
                      <div className="font-serif font-bold text-xl text-foreground">{currentTestimonio.nombre}</div>
                      <div className="text-sm text-muted-foreground">
                        {currentTestimonio.programa} • {currentTestimonio.año}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={handlePrevious} className="rounded-full bg-transparent">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                {testimoniosData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full bg-transparent">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-3xl font-bold font-serif text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Certificaciones Otorgadas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-3xl font-bold font-serif text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Tasa de Aprobación</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-3xl font-bold font-serif text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-3xl font-bold font-serif text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
