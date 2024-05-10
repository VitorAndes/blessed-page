import { DataProductsProps } from "@/data/DataProducts";
import Image from "next/image";

interface CardProductsProps extends DataProductsProps {
  src: string;
  alt: string;
}


export function CardProducts(Products: CardProductsProps) {
  return (
    <div className={`col-span-${Products.colSpan} shadow-lg shadow-color-primary hover:shadow-color-secondary hover:scale-105 transition-all w-full h-full rounded-md relative`}>
      <Image
        src={Products.src}
        alt={Products.alt}
        fill
        className="overflow-hidden bg-contain rounded-md"
      />
    </div>
  );
}
