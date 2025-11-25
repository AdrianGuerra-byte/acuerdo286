import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import preguntasData from "@/data/preguntas-frecuentes.json"

export function FAQSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Dudas sobre la Titulación
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Resolvemos tus dudas sobre el proceso de titulación por experiencia laboral.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {preguntasData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground text-lg pr-4">{faq.pregunta}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-pretty">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">¿No encontraste lo que buscabas?</p>
            <a href="#contacto" className="text-primary font-semibold hover:underline">
              Contáctanos directamente →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
