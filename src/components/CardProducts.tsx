'use client'
import { DataProductsProps } from "@/data/DataProducts";
import Image from "next/image";

interface CardProductsProps extends DataProductsProps {
  src: string;
  alt: string;
}

export function CardProducts(Products: CardProductsProps) {
  return (
    <div className={`shadow-lg shadow-slate-800 hover:shadow-sky-300 hover:scale-105 transition-all w-full h-full rounded-md relative`} style={{
      gridColumn: `${Products.colSpan}`
    }}>
      <Image
        src={Products.src}
        alt={Products.alt}
        fill
        className="overflow-hidden bg-contain rounded-md"
      />
    </div>
  );
}
