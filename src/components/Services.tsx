import { DataServices } from "@/data/DataServices";
import { CardServices } from "./CardServices";


export function Services() {
  return (
    <>
      <h1 id="Services" className="text-5xl font-semibold text-slate-800 mb-6">
        Serviços
      </h1>
      <div className="grid grid-cols-3 gap-3 mb-12">
        {DataServices.map((service, index) => {
            return (
                <CardServices key={index} alt={service.alt} src={service.src} title={service.title}/>
            )
        })}
      </div>
    </>
  );
}
