"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "saidsimon2@gmail.com",
    href: "mailto:saidsimon2@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Teléfono",
    value: "+57 316 623 4074",
    href: "tel:+573166234074",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Ubicación",
    value: "Bogotá, Colombia",
    href: null,
  },
]

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/AljureS",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/webdeveloper-saljure",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="fade-in-up text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent">Contacto</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t">
                  <p className="font-medium mb-4">Sígueme en:</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {social.icon}
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Asunto
                    </label>
                    <Input id="subject" placeholder="Asunto del mensaje" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Cuéntame sobre tu proyecto..." rows={5} />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
