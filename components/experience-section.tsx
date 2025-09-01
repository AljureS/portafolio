"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Desarrollador Web",
    company: "Ticketmaster Colombia / OCESA Colombia",
    period: "Dic 2024 – Presente",
    location: "Bogotá, Colombia",
    description: [
      "Desarrollo y mantenimiento de SPA's y e-commerce para eventos masivos",
      "Optimización de rendimiento en frontend con React y Next.js",
      "Coordinación con equipos de diseño, marketing y producto bajo Scrum",
      "Cumplimiento de estándares de seguridad y escalabilidad",
    ],
    technologies: ["React", "Next.js", "JavaScript", "Scrum"],
  },
  {
    title: "Teaching Assistant",
    company: "Henry Bootcamp",
    period: "May 2024 – Jul 2024",
    location: "Remoto",
    description: [
      "Mentoría de hasta 50 estudiantes en proyectos full stack",
      "Revisión de código, pair programming y soporte técnico",
      "Elaboración de material sobre pruebas unitarias y control de versiones",
      "Apoyo en bases de datos y mejores prácticas de desarrollo",
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Git"],
  },
  {
    title: "Agente Bilingüe",
    company: "ContactPoint 360",
    period: "Sep 2023 – Dic 2023",
    location: "Bogotá, Colombia",
    description: [
      "Coordinación de citas y ventas de servicios de mantenimiento",
      "Atención a clientes en Canadá en inglés y español",
      "Gestión de CRM y seguimiento de leads",
    ],
    technologies: ["CRM", "Customer Service", "Bilingual Communication"],
  },
  {
    title: "Practicante en Gerencia de Producción",
    company: "Alpina",
    period: "Ene 2023 – Ago 2023",
    location: "Bogotá, Colombia",
    description: [
      "Apoyo en proyectos de mejora continua y análisis de datos",
      "Contribución a la reducción de pérdidas en planta en un 10%",
      "Implementación de procesos de optimización",
    ],
    technologies: ["Data Analysis", "Process Optimization", "Lean Manufacturing"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Mi <span className="text-accent">Experiencia</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`fade-in-left stagger-delay-${(index % 4) + 1} hover:shadow-lg transition-all`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-accent mb-1">{exp.title}</CardTitle>
                    <h3 className="text-lg font-semibold text-primary">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
