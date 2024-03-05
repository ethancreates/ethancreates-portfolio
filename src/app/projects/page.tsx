import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";
import LaurenPortfolioImg from "../../../public/lauren-portfolio-img.jpeg";
import HLACareersImg from "../../../public/hla-website-img.jpeg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ProjectsPage = () => {
  return (
    <main className=" px-10 max-w-screen-xl mx-auto pt-10 font-medium">
      <div>
        <DottedButton className="md:flex hidden items-center  mb-10">
          <Link href="/">Back To Home</Link>
        </DottedButton>
      </div>

      <h1 className="text-7xl font-bold tracking-tighter">Projects</h1>

      {/* Section */}
      <section className="flex flex-col items-center">
        <Carousel className="w-full h-full max-w-6xl  mt-20">
          <CarouselContent>
            <CarouselItem>
              <Card className="bg-slate-800 border-b border-2 px-8 py-5">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <h2 className="border-b-2 pb-3">
                    Lauren Demi&apos;s UI/UX Designer Portfolio
                  </h2>
                </CardHeader>
                <CardContent className="flex items-center mt-5 space-x-10">
                  {/* Text */}
                  <div className="flex flex-col space-y-5">
                    <p className="text-lg text-white">
                      I was hired to build a responsive, performant, and modern
                      portfolio website by Lauren Demi, a UI/UX Designer based
                      in Boston.
                    </p>
                    <p className="text-lg text-white">
                      The website&apos;s built with the latest tech-stack used
                      by Netflix, Nike, Twitch, and other Fortune 500 companies,
                      which would be Next.js, Tailwind CSS, Framer Motion,
                      ResendAPI and TypeScript.
                    </p>
                    <p className="text-lg text-white">
                      The website is hosted on Vercel, and it&apos;s optimized
                      for performance, accessibility, and SEO. Resulting in no
                      less than 90/100 if not hitting the 100s in Google
                      Lighthouse scores.
                    </p>
                  </div>
                  {/* Image */}
                  <div>
                    <Image
                      src={LaurenPortfolioImg}
                      alt="Lauren Demi's Portfolio Screenshot"
                      className="rounded-2xl"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-white/70 flex items-center tracking-tighter text-xl justify-end">
                  Want to learn more about my project?
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link href="#">More Details</Link>
                  </DottedButton>
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link
                      href="https://laurendemidesign-portfolio.vercel.app/"
                      target="_blank"
                    >
                      Live Link
                    </Link>
                  </DottedButton>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-slate-800  border-2 px-8 py-5">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <h2 className="border-b-2  pb-3">HLA Careers Philippines</h2>
                </CardHeader>
                <CardContent className="flex items-center mt-5 space-x-10">
                  {/* Text */}
                  <div className="flex flex-col space-y-5">
                    <p className="text-lg text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit.
                    </p>
                    <p className="text-lg text-white">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatum mollitia optio, repudiandae voluptatibus
                      doloribus assumenda reiciendis blanditiis tempore vel
                      pariatur?
                    </p>
                    <p className="text-lg text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae maxime, harum repellat ipsum pariatur consectetur?
                    </p>
                  </div>
                  {/* Image */}
                  <div>
                    <Image
                      src={HLACareersImg}
                      alt="Lauren Demi's Portfolio Screenshot"
                      className="rounded-2xl"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-white/70 flex items-center tracking-tighter text-xl justify-end">
                  Want to learn more about my project?
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link href="#">More Details</Link>
                  </DottedButton>
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link
                      href="https://ph-hla-careers.vercel.app/"
                      target="_blank"
                    >
                      Live Link
                    </Link>
                  </DottedButton>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem>3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default ProjectsPage;
