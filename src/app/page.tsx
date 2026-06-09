// page.tsx
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
      <div className="w-full min-h-screen pb-12" style={{ backgroundColor: '#fdf6ed' }}>
        {/* Título da Seção - Estilo Pet Shop */}
        <div className="text-center my-16 px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-amber-300 rounded-full"></span>
            <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase">
              Destaques
            </span>
            <span className="w-8 h-0.5 bg-amber-300 rounded-full"></span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-800 tracking-tight">
            Produtos em Destaque
          </h1>
          <p className="text-stone-500 mt-4 text-lg max-w-md mx-auto font-sans">
            Os melhores produtos selecionados com amor para seu melhor amigo
          </p>
        </div>

        {/* Grid Responsivo para os Cards */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
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