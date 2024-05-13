import { DataProducts } from "@/data/DataProducts";
import { CardProducts } from "./CardProducts";

export function Products() {
  return (
    <>
      <h1 id="Products" className="text-5xl font-semibold text-slate-800 mb-6">Produtos</h1>
      <div className="grid grid-cols-4 w-[750px] h-[500px] xl:w-[1250px] xl:h-[850px] gap-2 mb-12">
        {DataProducts.map((product, index) => {
          return (
            <CardProducts key={index} alt={product.alt} src={product.src} colSpan={product.colSpan}/>
          );
        })}
      </div>
    </>
  )
}


