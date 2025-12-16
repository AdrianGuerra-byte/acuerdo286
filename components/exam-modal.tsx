"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Target, Users, FileText, CheckCircle2, BookOpen, FileSpreadsheet } from "lucide-react";

interface ExamDetail {
  objetivo: string;
  dirigidoA: Array<{
    titulo: string;
    descripcion: string;
  }>;
  estructura: string[];
  guiaTeoricoUrl?: string;
  guiaEstudiosUrl?: string;
}

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  examName: string;
  examDetail: ExamDetail | null;
}

export function ExamModal({
  isOpen,
  onClose,
  examName,
  examDetail,
}: ExamModalProps) {
  if (!examDetail) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 gap-0">
        {/* Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 border-b bg-gradient-to-r from-primary/5 to-transparent">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl sm:text-3xl text-balance pr-8">
              {examName}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Contenido */}
        <div className="px-6 py-6 sm:px-8 sm:py-8 space-y-8">

          {/* Objetivo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Objetivo
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              {examDetail.objetivo}
            </p>
          </div>

          {/* Dirigido A */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                ¿A quién va dirigido?
              </h3>
            </div>

            <div className="space-y-4">
              {examDetail.dirigidoA.map((item, index) => (
                <div key={index} className="bg-muted/20 p-5 rounded-xl border border-border/50">
                  <h4 className="font-medium text-base text-foreground flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item.titulo}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-7">
                    {item.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Estructura */}
          <div className="space-y-5 bg-muted/10 rounded-xl p-6 border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Estructura del Examen
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {examDetail.estructura.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary/10 border border-secondary/20 rounded-lg py-3 px-5 text-center font-medium text-sm sm:text-base text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA y Guías */}
          <div className="pt-6 border-t space-y-4">
            {/* Botones de Guías */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {examDetail.guiaTeoricoUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-medium border-primary/30 hover:bg-primary/5 hover:border-primary/50"
                  onClick={() => window.open(examDetail.guiaTeoricoUrl, '_blank')}
                >
                  <FileSpreadsheet className="w-5 h-5 mr-2" />
                  Guía Examen Teórico
                </Button>
              )}
              {examDetail.guiaEstudiosUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full font-medium border-secondary/30 hover:bg-secondary/5 hover:border-secondary/50"
                  onClick={() => window.open(examDetail.guiaEstudiosUrl, '_blank')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Guía de Examen Práctico
                </Button>
              )}
            </div>

            {/* Botón Principal */}
            <Button size="lg" className="w-full font-medium shadow-md">
              Inscribirme Ahora
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}