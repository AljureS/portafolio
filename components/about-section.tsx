"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Sobre <span className="text-accent">mí</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <Card className="fade-in-up stagger-delay-1">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-bold">
                      SA
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Soy un <strong className="text-accent">Ingeniero de Producción</strong> con sólida formación en
                    desarrollo de software. Actualmente soy <strong className="text-primary">Desarrollador Web</strong>{" "}
                    en Ticketmaster Colombia y OCESA Colombia, donde administro plataformas de ticketing y SPA's de alto
                    tráfico.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Tengo experiencia en <strong className="text-accent">frontend, backend, cloud y DevOps</strong>,
                    trabajando con tecnologías como React, Next.js, NestJS, Spring Boot, Docker y AWS.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Me motiva crear{" "}
                    <strong className="text-primary">software escalable, seguro y de impacto real</strong>,
                    especialmente en sectores como entretenimiento, fintech e inteligencia artificial.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
