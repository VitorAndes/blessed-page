import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Contacts() {
  return (
    <>
      <div className="flex flex-col text-center space-y-8">
        <h1 className="font-mono text-sky-100 text-2xl">
          Entre em contato com a gente!
        </h1>
        <Button
          className="flex items-center p-6 gap-2 hover:text-green-500 rounded-lg font-mono"
          variant="outline"
        >
          <MessageCircle />
          <a
            href="https://api.whatsapp.com/send?phone=5592985596497"
            target="_blank"
          >
            Entrar em contato
          </a>
        </Button>
      </div>
      <div className="flex">
        <Button
          variant="link"
          className="hover:text-red-600 transition-colors flex items-center text-sky-100 gap-2 font-mono"
        >
          <Mail />
          <a href="mailto:" target="_blank">
            Blessedfm
          </a>
        </Button>

        <Button
          variant="link"
          className="hover:text-pink-500 transition-colors flex items-center text-sky-100 gap-2 font-mono"
        >
          <Instagram />
          <a href="https://www.instagram.com/blessedfm22/" target="_blank">
            Blessedfm
          </a>
        </Button>
      </div>
    </>
  );
}
