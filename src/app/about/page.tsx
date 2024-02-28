import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center p-10">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl lg:text-9xl font-bold">About.</h1>
        <Separator />
        <button className="mt-3 flex items-center hover:bg-white/20 text-2xl tracking-tighter border p-3 rounded-2xl">
          <Link href="/">
            <IoHome className="text-xl" />
          </Link>
        </button>
      </div>
      <section className="flex flex-col md:flex-row">
        {/* left side */}
        <div className="md:basis-2/3"></div>
        {/* right side */}
        <div className="md:basis-1/3"></div>
      </section>
    </main>
  );
};

export default AboutMePage;
