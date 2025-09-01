"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Lenguajes",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java"],
    icon: "💻",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Diseño responsivo", "Optimización UI/UX"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["NestJS", "Spring Boot", "Node.js", "APIs RESTful", "JWT", "Socket.io"],
    icon: "⚙️",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Render", "Vercel"],
    icon: "☁️",
  },
  {
    title: "Bases de datos",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Modelado NoSQL"],
    icon: "🗄️",
  },
  {
    title: "Arquitectura",
    skills: ["POO", "SOLID", "DDD", "Microservicios", "Patrones de diseño", "Testing"],
    icon: "🏗️",
  },
]

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Mis <span className="text-accent">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`fade-in-up stagger-delay-${(index % 4) + 1} hover:shadow-lg transition-shadow`}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl text-accent">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="fade-in-up mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Idiomas</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Español</span>
                  <Badge className="bg-primary">Nativo</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Inglés</span>
                  <Badge className="bg-accent">C2</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
