import HeroSection from "@/components/HeroSection";

export default async function Home() {
  return (
    <main className="flex flex-col items-center max-sm:px-8  px-14  lg:max-w-screen-2xl md:mx-auto ">
      <HeroSection />
    </main>
  );
}
