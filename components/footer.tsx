import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">CUH</span>
              </div>
              <div>
                <div className="font-serif font-bold text-lg">Centro Universitario</div>
                <div className="text-sm text-primary-foreground/80">Hidalguense</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed text-pretty">
              Institución autorizada por la SEP para la titulación por experiencia laboral mediante el Acuerdo 286.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#acuerdo-286"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Acuerdo 286
                </Link>
              </li>
              <li>
                <Link
                  href="/#oferta"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Oferta de Exámenes
                </Link>
              </li>
              <li>
                <Link
                  href="/#calendario"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Calendario
                </Link>
              </li>
              <li>
                <Link
                  href="/#proceso"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Proceso de Inscripción
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Oferta Educativa
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicios Escolares
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Biblioteca
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Becas y Financiamiento
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Bolsa de Trabajo
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/60" />
                <a
                  href="mailto:examenes@cuh.edu.mx"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  examenes@cuh.edu.mx
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">771 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-pretty">
                  Boulevard Felipe Ángeles #506, Pachuca, Hidalgo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/80">
            <div className="text-center sm:text-left">
              © {new Date().getFullYear()} Centro Universitario Hidalguense. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Política de Datos
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
