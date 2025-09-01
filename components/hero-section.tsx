"use client"

import { Button } from "@/components/ui/button"
import { useParallax } from "@/hooks/use-parallax"
import { Github, Linkedin, Mail, Phone, Code, Zap } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const parallaxRef = useParallax(0.3)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 parallax"
      />

      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl pulse-glow floating-animation" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl pulse-glow floating-animation"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg floating-animation"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="fade-in-up">
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 text-balance transition-all duration-500 ${isHovered ? "text-glow" : ""}`}
              >
                <span className="text-foreground">Said</span>{" "}
                <span className={`text-primary transition-all duration-500 ${isHovered ? "text-accent" : ""}`}>
                  Aljure
                </span>
              </h1>
              {/* Interactive code brackets that appear on hover */}
              <div
                className={`absolute -left-8 top-1/2 transform -translate-y-1/2 text-primary text-4xl transition-all duration-500 ${isHovered ? "opacity-100 -translate-x-2" : "opacity-0"}`}
              >
                {"<"}
              </div>
              <div
                className={`absolute -right-8 top-1/2 transform -translate-y-1/2 text-primary text-4xl transition-all duration-500 ${isHovered ? "opacity-100 translate-x-2" : "opacity-0"}`}
              >
                {">"}
              </div>
            </div>
          </div>

          <div className="fade-in-up stagger-delay-1">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="w-6 h-6 text-accent" />
              <h2 className="text-2xl md:text-3xl text-accent font-medium">Desarrollador Full Stack</h2>
              <Zap className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="fade-in-up stagger-delay-2">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Bogotá, Colombia • Especializado en React, Next.js, NestJS y tecnologías cloud
            </p>
          </div>

          <div className="fade-in-up stagger-delay-3">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow">
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow bg-transparent"
              >
                Ver Proyectos
              </Button>
            </div>
          </div>

          <div className="fade-in-up stagger-delay-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/AljureS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/webdeveloper-saljure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:saidsimon2@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+573166234074"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
