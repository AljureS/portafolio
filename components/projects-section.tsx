"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Said Market",
    description:
      "Supermercado virtual completo con gestión de inventarios, usuarios y facturación. Implementado con arquitectura DDD y CI/CD.",
    image: "/ecommerce-dashboard.png",
    technologies: ["Spring Boot", "PostgreSQL", "DDD", "Docker", "GitHub Actions"],
    category: "E-commerce",
  },
  {
    title: "LiveChat con Socket.io",
    description:
      "Chat en tiempo real con WebSocket gateway y fallback HTTP Polling para garantizar conectividad en cualquier entorno.",
    image: "/real-time-chat-interface.png",
    technologies: ["NestJS", "Socket.io", "JavaScript", "WebSocket"],
    category: "Real-time",
  },
  {
    title: "ETicketBack / Radio Ticket",
    description:
      "Backend robusto para sistema de ticketing con integración de pasarelas de pago, APIs seguras y despliegue automatizado.",
    image: "/ticketing-system-backend-dashboard.png",
    technologies: ["NestJS", "Docker", "JWT", "Cloudinary", "Render"],
    category: "Backend",
  },
  {
    title: "GridWise-COM (AI/ML)",
    description:
      "Sistema de predicción de demanda eléctrica usando CatBoost GPU y Transformers tabulares con interfaz Streamlit.",
    image: "/ai-machine-learning-dashboard-with-charts.png",
    technologies: ["Python", "CatBoost GPU", "Transformers", "Streamlit", "Docker"],
    category: "AI/ML",
  },
  {
    title: "Live Sketch Rooms (MVP)",
    description: "Widget colaborativo para dibujo en tiempo real con arquitectura escalable usando Flutter y NestJS.",
    image: "/collaborative-drawing-app.png",
    technologies: ["Flutter", "NestJS", "Redis", "Socket.io"],
    category: "Mobile",
  },
  {
    title: "GreenPet IoT System",
    description:
      "Sistema inteligente de riego con ESP32, sensores solares y componentes impresos en 3D para automatización agrícola.",
    image: "/iot-irrigation-system-with-sensors.png",
    technologies: ["ESP32", "IoT", "Solar Sensors", "3D Printing"],
    category: "IoT",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Mis <span className="text-accent">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos destacados que demuestran mis habilidades en desarrollo full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`fade-in-up stagger-delay-${(index % 4) + 1} hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-accent group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
