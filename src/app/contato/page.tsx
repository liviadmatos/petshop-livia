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
import { Mail, Phone, MapPin } from "lucide-react"

const MapaContato = dynamic(() => import("@/components/MapaContato"), {
  ssr: false,
  loading: () => (
    <div className="h-72 w-full bg-amber-50 flex items-center justify-center text-amber-700 font-medium">
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
    <div
      className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#fdf6ed" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-amber-300 rounded-full"></span>
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
              Contato
            </span>
            <span className="w-8 h-0.5 bg-amber-300 rounded-full"></span>
          </div>

          <h1 className="text-5xl text-stone-800">
            Fale Conosco
          </h1>

          <p className="text-stone-500 mt-4 text-lg max-w-xl mx-auto">
            Estamos sempre prontos para ajudar você e seu melhor amigo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Informações */}
          <div className="space-y-8">

            <Card className="rounded-3xl border-amber-100 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-800">
                  Canais de Atendimento
                </CardTitle>

                <CardDescription className="text-stone-500">
                  Entre em contato diretamente através dos nossos telefones,
                  e-mail ou redes sociais.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">

                <div className="space-y-5">

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <Mail className="h-5 w-5 text-amber-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-stone-500">
                        E-mail
                      </p>
                      <p className="text-stone-800 font-medium">
                        contato@papelariarabisco.com.br
                      </p>
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <Phone className="h-5 w-5 text-amber-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-stone-500">
                        Telefones
                      </p>
                      <p className="text-stone-800 font-medium">
                        (11) 4002-8922 / (11) 99999-8888
                      </p>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                      <MapPin className="h-5 w-5 text-amber-600" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-stone-500">
                        Endereço
                      </p>
                      <p className="text-stone-800 font-medium">
                        Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                      </p>
                    </div>
                  </div>

                </div>

                <hr className="border-amber-100" />

                {/* Redes sociais */}
                <div>
                  <p className="text-sm font-semibold text-stone-500 mb-3">
                    Redes Sociais
                  </p>

                  <div className="flex gap-4">

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors text-amber-700 inline-block"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors text-amber-700 inline-block"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors text-amber-700 inline-block"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>

                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="overflow-hidden h-72 rounded-3xl border border-amber-100 shadow-md bg-white relative z-10">
              <CardContent className="p-0 h-full w-full">
                <MapaContato />
              </CardContent>
            </Card>

          </div>

          {/* Formulário */}
          <div>
            <Card className="h-full rounded-3xl border-amber-100 shadow-md bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-800">
                  Envie uma Mensagem
                </CardTitle>

                <CardDescription className="text-stone-500">
                  Preencha o formulário abaixo e retornaremos o contato em até
                  24 horas úteis.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      className="border-amber-200 focus-visible:ring-amber-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seuemail@exemplo.com.br"
                      className="border-amber-200 focus-visible:ring-amber-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input
                      id="assunto"
                      placeholder="Ex: Dúvida sobre entrega"
                      className="border-amber-200 focus-visible:ring-amber-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Digite detalhadamente a sua mensagem..."
                      className="min-h-36 resize-none border-amber-200 focus-visible:ring-amber-400"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl h-11"
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

