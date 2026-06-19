import Carrossel from "@/components/Carrossel"
import CardProduto from "@/components/CardProduto"
import produtos from "../../produtos.json"

export default function Home() {
  const produtosEmDestaque = produtos.filter(
    (produto) => produto.destaque === true
  )

  return (
    <>
      {/* Carrossel */}
      <Carrossel />

      {/* Conteúdo principal com produtos */}
      <div className="w-full min-h-screen pb-12 bg-background">
        {/* Título da Seção */}
        <div className="text-center py-12 md:py-16 px-4">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-12 h-0.5 bg-secondary/30 rounded-full"></span>
            <span className="text-secondary text-sm font-medium tracking-wider uppercase">
              Destaques
            </span>
            <span className="w-12 h-0.5 bg-secondary/30 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Conheça nossos produtos mais amados pelos pets e seus tutores
          </p>
        </div>

        {/* Grid Responsivo */}
        <div className="flex justify-center px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
            {produtosEmDestaque.map((produto) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                title={produto.title}
                description={produto.description}
                price={produto.price}
                imageSrc={produto.imageSrc}
                destaque={produto.destaque}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}