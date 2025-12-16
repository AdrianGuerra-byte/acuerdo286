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
                      <p className="text-muted-foreground">olivia.garcia@posgradocuh.edu.mx</p>
                      <p className="text-muted-foreground">promocion@cuh.mx</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Teléfonos</h3>
                      <p className="text-muted-foreground">771 719 53 00</p>
                      <p className="text-muted-foreground">771 719 53 01</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Horarios de Atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 7:00 AM - 10:00 PM</p>
                      <p className="text-muted-foreground">Sábados: 7:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">Dirección</h3>
                      <p className="text-muted-foreground text-pretty">
                        Boulevard del Minero #305 Colonia Rojo Gómez Pachuca, Hgo. C.P. 42030
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
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.4912378575782!2d-98.75326496620303!3d20.124616319274338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10a032d4ddb1b%3A0xf397144c38bcb070!2sCentro%20Universitario%20Hidalguense!5e0!3m2!1ses-419!2smx!4v1765855252183!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Centro Universitario Hidalguense"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
