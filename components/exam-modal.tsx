"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Users, FileText } from "lucide-react";

interface ExamDetail {
  objetivo: string;
  dirigidoA: Array<{
    titulo: string;
    descripcion: string;
  }>;
  estructura: string[];
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl sm:text-3xl text-balance pr-8">
            {examName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Objetivo */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">
                Objetivo
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-pretty pl-10">
              {examDetail.objetivo}
            </p>
          </div>

          {/* Dirigido A */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">
                ¿A quién va dirigido?
              </h3>
            </div>
            <div className="space-y-4 pl-10">
              {examDetail.dirigidoA.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium text-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item.titulo}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                    {item.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Estructura */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">
                Estructura
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pl-10">
              {examDetail.estructura.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-1.5 px-3"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-border">
            <Button size="lg" className="w-full sm:w-auto font-medium">
              Inscribirme
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
