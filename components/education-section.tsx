"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    title: "Full Stack Web Developer",
    institution: "Henry Bootcamp",
    year: "2024",
    description: "800 horas intensivas en desarrollo web full stack",
    type: "Bootcamp",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Ingeniería de Producción Agroindustrial",
    institution: "Universidad de La Sabana",
    year: "2018 – 2023",
    description: "Formación integral en ingeniería con enfoque en optimización de procesos",
    type: "Pregrado",
    icon: <GraduationCap className="w-6 h-6" />,
  },
]

const courses = [
  "Java Spring Framework",
  "Programación Orientada a Objetos Avanzada",
  "Socket.io y WebSockets",
  "Git y GitHub",
  "Prompt Engineering",
  "Metodologías Ágiles (Scrum)",
]

export function EducationSection() {
  return (
    <section id="educacion" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Mi <span className="text-accent">Educación</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formación académica y cursos especializados en tecnología
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => (
              <Card
                key={edu.title}
                className={`fade-in-up stagger-delay-${index + 1} hover:shadow-lg transition-shadow`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{edu.icon}</div>
                    <Badge variant="outline">{edu.type}</Badge>
                  </div>
                  <CardTitle className="text-xl text-accent">{edu.title}</CardTitle>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.year}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="fade-in-up stagger-delay-3">
            <CardHeader>
              <CardTitle className="text-xl text-accent text-center">Cursos y Certificaciones Adicionales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {courses.map((course) => (
                  <Badge key={course} variant="secondary" className="justify-center p-2">
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
