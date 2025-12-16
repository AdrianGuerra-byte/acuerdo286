import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">
              Contacto y Asesoría
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Estamos aquí para resolver todas tus dudas sobre el proceso de titulación.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Correo Institucional</h3>
                      <p className="text-muted-foreground">examenes@cuh.edu.mx</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24-48 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Teléfonos</h3>
                      <p className="text-muted-foreground">771 123 4567</p>
                      <p className="text-muted-foreground">771 123 4568</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Horarios de Atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sábados: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Dirección</h3>
                      <p className="text-muted-foreground text-pretty">
                        Boulevard Felipe Ángeles #506, Col. Venta Prieta, Pachuca de Soto, Hidalgo, México. CP 42080
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full gap-2" size="lg">
                <MessageCircle className="w-5 h-5" />
                Enviar Mensaje por WhatsApp
              </Button>
            </div>

            {/* Map */}
            <Card className="overflow-hidden">
              <CardContent className="p-0 h-full min-h-[400px] bg-muted">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2 p-8">
                    <MapPin className="w-12 h-12 mx-auto text-primary" />
                    <p className="font-semibold">Mapa de Ubicación</p>
                    <p className="text-sm">Centro Universitario Hidalguense</p>
                    <p className="text-xs">Boulevard Felipe Ángeles #506</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
