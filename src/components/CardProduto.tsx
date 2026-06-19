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
    <Card className="group relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-muted/40">
      
      {/* Destaque */}
      {destaque && (
       <Badge className="absolute top-4 right-4 z-20 bg-amber-400/90 hover:bg-amber-400 text-white rounded-full px-4 py-1 text-xs font-medium border-0 shadow-sm backdrop-blur-sm">
        Destaque
      </Badge>
      )}

      {/* Imagem */}
      <div className="relative h-64 w-full bg-gradient-to-b from-muted/30 to-transparent flex items-center justify-center p-6">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, 280px"
          priority={destaque}
        />
      </div>

      {/* Conteúdo */}
      <div className="px-5 pb-6 pt-2">
        <h3 className="text-xl font-semibold text-foreground leading-tight line-clamp-2">
          {title}
        </h3>

        <CardDescription className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </CardDescription>

        {/* Preço */}
        <div className="mt-5">
          <Button 
            className="w-full h-12 rounded-xl bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground text-lg font-semibold shadow-none transition-all duration-300 border border-secondary/20 hover:border-secondary/40"
          >
            {formattedPrice}
          </Button>
        </div>
      </div>
    </Card>
  )
}