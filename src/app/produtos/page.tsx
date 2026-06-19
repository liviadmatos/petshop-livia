import CardProduto from "../../components/CardProduto"
import produtos from "../../../produtos.json"

export default function Produtos() {
  return (
    <div className="w-full min-h-screen bg-background pb-16">
      {/* Cabeçalho */}
      <div className="text-center py-16 md:py-20 px-4 bg-gradient-to-b from-muted/20 to-transparent">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-12 h-0.5 bg-secondary/30 rounded-full"></span>
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            Catálogo
          </span>
          <span className="w-12 h-0.5 bg-secondary/30 rounded-full"></span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
          Nossos Produtos
        </h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
          Qualidade e carinho para o seu melhor amigo
        </p>
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-8">
        {produtos.map((produto) => (
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
  )
}