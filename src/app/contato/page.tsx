"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail, Phone, MapPin} from "lucide-react"

const MapaContato = dynamic(() => import("@/components/MapaContato"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full bg-muted/30 flex items-center justify-center text-muted-foreground font-medium rounded-2xl">
      Carregando mapa...
    </div>
  ),
})

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="w-full min-h-screen py-12 md:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-secondary/30 rounded-full"></span>
            <span className="text-secondary text-sm font-medium tracking-wider uppercase">
              Contato
            </span>
            <span className="w-12 h-0.5 bg-secondary/30 rounded-full"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
            Fale Conosco
          </h1>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            Estamos sempre prontos para ajudar você e seu melhor amigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Informações */}
          <div className="space-y-6">
            <Card className="rounded-2xl border border-muted/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground">
                  Canais de Atendimento
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Entre em contato diretamente através dos nossos telefones,
                  e-mail ou redes sociais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-muted/20 transition-colors">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">E-mail</p>
                      <p className="text-foreground font-medium text-sm">
                        contato@petshopelo.com.br
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-muted/20 transition-colors">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Telefones</p>
                      <p className="text-foreground font-medium text-sm">
                        (11) 4002-8922 / (11) 99999-8888
                      </p>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-muted/20 transition-colors">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Endereço</p>
                      <p className="text-foreground font-medium text-sm">
                        Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-muted/30" />

                {/* Redes sociais */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    Redes Sociais
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors text-secondary inline-block"
                    >
                     
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors text-secondary inline-block"
                    >
                      
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary/10 rounded-full hover:bg-secondary/20 transition-colors text-secondary inline-block"
                    >
                      
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="overflow-hidden h-72 rounded-2xl border border-muted/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 h-full w-full">
                <MapaContato />
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <div>
            <Card className="h-full rounded-2xl border border-muted/30 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-foreground">
                  Envie uma Mensagem
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Preencha o formulário abaixo e retornaremos o contato em até
                  24 horas úteis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="nome" className="text-sm font-medium text-foreground">
                      Nome Completo
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      className="border-muted/40 bg-input/50 rounded-xl focus:border-secondary/30 focus:ring-secondary/20"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seuemail@exemplo.com.br"
                      className="border-muted/40 bg-input/50 rounded-xl focus:border-secondary/30 focus:ring-secondary/20"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="assunto" className="text-sm font-medium text-foreground">
                      Assunto
                    </Label>
                    <Input
                      id="assunto"
                      placeholder="Ex: Dúvida sobre entrega"
                      className="border-muted/40 bg-input/50 rounded-xl focus:border-secondary/30 focus:ring-secondary/20"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="mensagem" className="text-sm font-medium text-foreground">
                      Mensagem
                    </Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Digite detalhadamente a sua mensagem..."
                      className="min-h-32 resize-none border-muted/40 bg-input/50 rounded-xl focus:border-secondary/30 focus:ring-secondary/20"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground font-semibold rounded-xl h-11 transition-all duration-300 border border-secondary/20 hover:border-secondary/40"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}