import { DataServicesProps } from "@/data/DataServices";
import Image from "next/image";

export interface CardServicesProps extends DataServicesProps {
  title: string;
}

export function CardServices(Services: CardServicesProps) {
  return (
    <div className="flex flex-col items-center gap-14 p-2 bg-gradient-to-b from-sky-200 to-slate-800 text-sky-100 shadow-lg border-sky-100 border shadow-slate-800 w-[241px] h-[280px] xl:w-[406px] xl:h-[410px] rounded-lg transition-colors duration-300 hover:from-slate-800 hover:to-sky-200 hover:text-slate-800 hover:border-slate-800">
      <div className="w-[200px] h-[250px] xl:w-[400px] relative">
        <Image
          src={Services.src}
          alt={Services.alt}
          fill
          className="rounded-lg h-64"
        />
      </div>
      <h2 className="lg:text-3xl">{Services.title}</h2>
    </div>
  );
}
