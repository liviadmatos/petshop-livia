
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription } from "@/components/ui/card"
import Image from "next/image"

interface CardProdutoProps {
  id: string | number
  title: string
  description: string
  price: string | number
  imageSrc: string
  destaque?: boolean
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque
}: CardProdutoProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price))

  return (
    <Card className="group relative w-80 overflow-hidden rounded-3xl bg-[#fffaf5] border-none shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1">

      {/* Destaque */}
      {destaque && (
        <Badge className="absolute top-5 right-5 z-30 bg-amber-400 hover:bg-amber-400 text-white rounded-full px-4 py-1.5 text-xs font-semibold border-0 shadow-sm">
          Destaque
        </Badge>
      )}

      {/* Imagem */}
      <div className="relative h-72 w-full flex items-center justify-center px-6 pt-8">

        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>

      {/* Conteúdo */}
      <div className="px-6 pb-6 pt-2">

        <h3 className="text-2xl font-bold text-stone-800 leading-tight line-clamp-2">
          {title}
        </h3>

        <CardDescription className="mt-3 text-[15px] text-stone-500 leading-relaxed line-clamp-2">
          {description}
        </CardDescription>

        {/* preço */}
        <div className="mt-6">
          <Button className="w-full h-14 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold shadow-none">
            {formattedPrice}
          </Button>
        </div>
      </div>
    </Card>
  )
}

