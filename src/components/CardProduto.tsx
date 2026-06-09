import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
} from "@/components/ui/card"
import Image from "next/image"

interface CardProdutoProps {
  id: string | number;
  title: string;
  description: string;
  price: string | number;
  imageSrc: string;
  destaque?: boolean;
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="relative w-80 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Selo de destaque */}
      {destaque && (
        <Badge variant="secondary" className="absolute top-3 right-3 z-30">
          Destaque
        </Badge>
      )}

      {/* Container de imagem - aspecto quadrado */}
      <div className="relative w-full aspect-square bg-slate-50 flex items-center justify-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>

      {/* Conteúdo - flex-1 para ocupar espaço disponível */}
      <div className="flex-1 flex flex-col p-4 justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-800 line-clamp-2 font-sans">
            {title}
          </h3>
          <CardDescription className="text-xs text-slate-500 mt-1 line-clamp-2">
            {description}
          </CardDescription>
        </div>

        {/* Preço e botão */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <Button className="w-full text-sm font-medium">
            {formattedPrice}
          </Button>
        </div>
      </div>
    </Card>
  )
}
