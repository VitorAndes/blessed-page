import { About } from "@/components/About";
import { Contacts } from "@/components/Contacts";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="max-w-[1400px] flex flex-col m-auto mb-10 items-center">
        <About />
        <Products />
        <Services />
      </section>
      <footer className="bg-slate-800 p-4 space-y-8">
        <Contacts />
      </footer>
    </div>
  );
}
