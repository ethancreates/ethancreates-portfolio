import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";
import LaurenPortfolioImg from "../../../public/lauren-portfolio-img.jpeg";
import HLACareersImg from "../../../public/hla-website-img.jpeg";
import ArticlePalImg from "../../../public/articlepal.jpeg";

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
        <Carousel className="w-full h-full max-w-6xl  my-20 ">
          <CarouselContent>
            <CarouselItem>
              <Card className="bg-slate-800  border-2 px-8 py-5">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <h2 className="border-b-2  pb-3">Article Pal</h2>
                </CardHeader>
                <CardContent className="flex md:flex-row flex-col items-center mt-5 space-x-10">
                  {/* Text */}
                  <div className="flex flex-col space-y-5">
                    <p className="text-lg text-white">
                      Article Pal is a personal SaaS project, designed and
                      developed for writers that are having trouble to find the
                      right words, sentences, or even paragraphs for their
                      articles. As someone who wrote blog articles for more than
                      a year, I found out that even the most seasoned writers
                      still have writer&apos;s block.
                    </p>
                    <p className="text-lg text-white">
                      That is precisely why I made Article Pal, an LLM-powered
                      tool that helps writers build their article, from the
                      outline and keywords, to producing the whole article. The
                      writer just has to refine and edit the article written by
                      Article Pal.
                    </p>
                    <p className="text-lg text-white">
                      The project is being built with Next.js, Tailwind CSS,
                      Framer Motion, MongoDB, Zod, React-Hook-Form, Kinde-Auth,
                      Payload CMS and TypeScript as well.
                    </p>
                  </div>
                  {/* Image */}
                  <div>
                    <Image
                      src={ArticlePalImg}
                      alt="Article Pal's Hero Section"
                      className="rounded-2xl mt-5 md:mt-0"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-white/70 flex flex-col md:flex-row md:space-y-0 space-y-5 items-center tracking-tighter text-xl justify-end">
                  Want to learn more about my project?
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link href="#">More Details</Link>
                  </DottedButton>
                  <DottedButton className="text-sm ml-5">
                    <Link
                      href="https://article-pal.vercel.app"
                      target="_blank"
                      className=""
                    >
                      Live Link
                    </Link>
                  </DottedButton>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-slate-800 border-b border-2 px-8 py-5">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <h2 className="border-b-2 pb-3">
                    Lauren Demi&apos;s UI/UX Designer Portfolio
                  </h2>
                </CardHeader>
                <CardContent className="flex md:flex-row flex-col items-center mt-5 space-x-10">
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
                      className="rounded-2xl mt-5 md:mt-0"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-white/70 flex flex-col md:flex-row md:space-y-0 space-y-5 items-center tracking-tighter text-xl justify-end">
                  Want to learn more about my project?
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link href="#">More Details</Link>
                  </DottedButton>
                  <DottedButton className="blur-sm text-sm ml-5 cursor-not-allowed">
                    <Link
                      href="#"
                      target="_blank"
                      aria-disabled
                      className="cursor-not-allowed"
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
                <CardContent className="flex flex-col md:flex-row items-center mt-5 space-x-10">
                  {/* Text */}
                  <div className="flex flex-col space-y-5">
                    <p className="text-lg text-white">
                      I spearheaded the development of a job board web
                      application tailored for HLA, a leading Chinese clothing
                      brand, with a strong emphasis on user-centric design for
                      aspiring applicants. This involved incorporating essential
                      features like a job board, application forms, tracker, and
                      dashboard to optimize user experience.
                    </p>
                    <p className="text-lg text-white">
                      However, this is project is currently on hold by the
                      company due to internal affairs, and I am to standby for
                      further instructions.
                    </p>
                    <p className="text-lg text-white">
                      The project is built with Next.js, Tailwind CSS, Framer
                      Motion, ResendAPI and TypeScript as well.
                    </p>
                  </div>
                  {/* Image */}
                  <div>
                    <Image
                      src={HLACareersImg}
                      alt="Lauren Demi's Portfolio Screenshot"
                      className="rounded-2xl mt-5 md:mt-0"
                    />
                  </div>
                </CardContent>
                <CardFooter className="text-white/70 flex flex-col md:flex-row space-y-5 md:space-y-0 items-center tracking-tighter text-xl justify-end">
                  Want to learn more about my project?
                  <DottedButton className="bg-slate-800 text-sm ml-5">
                    <Link href="#">More Details</Link>
                  </DottedButton>
                  <DottedButton className="blur-sm text-sm ml-5 cursor-not-allowed">
                    <Link
                      href="#"
                      target="_blank"
                      aria-disabled
                      className="cursor-not-allowed"
                    >
                      Live Link
                    </Link>
                  </DottedButton>
                </CardFooter>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
};

export default ProjectsPage;
