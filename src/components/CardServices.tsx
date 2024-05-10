import { DataServicesProps } from "@/data/DataServices";
import Image from "next/image";

export interface CardServicesProps extends DataServicesProps {
  title: string;
}

export function CardServices(Services: CardServicesProps) {
  return (
    <div className="flex flex-col items-center gap-10 p-2 bg-gradient-to-b from-sky-100 to-sky-200 shadow-xl shadow-color-primary w-[400px] h-[350px] rounded-md">
      <Image
        src={Services.src}
        alt={Services.alt}
        width={400}
        height={200}
        className="rounded-lg h-64"
      />
      <h2 className="text-slate-800 text-3xl font-medium">
        {Services.title}
      </h2>
    </div>
  );
}
