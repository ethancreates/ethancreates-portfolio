import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";
import LaurenPortfolioImg from "../../../public/lauren-portfolio-img.jpeg";
import HLACareersImg from "../../../public/hla-careers.png";
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
              <Card className="bg-slate-800  border-2 px-8 py-5 md:h-[600px]">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <div className="flex justify-between border-b-2 pb-3">
                    <h2>Article Pal - SaaS Personal Project</h2>
                    <DottedButton className="text-lg">
                      <Link
                        href="https://article-pal.vercel.app"
                        target="_blank"
                        className=""
                      >
                        Live Link
                      </Link>
                    </DottedButton>
                  </div>
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
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-slate-800 border-b md:h-[600px] border-2 px-8 py-5">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <div className="flex justify-between border-b-2 pb-3">
                    <h2>Lauren Demi&apos;s UI/UX Designer - Portfolio</h2>
                    <DottedButton className="text-lg">
                      <Link
                        href="https://laurendemidesign-portfolio.vercel.app"
                        target="_blank"
                        className=""
                      >
                        Live Link
                      </Link>
                    </DottedButton>
                  </div>
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
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="bg-slate-800  border-2 px-8 py-5 md:h-[600px]">
                <CardHeader className="text-white tracking-tighter text-5xl flex flex-col">
                  <div className="flex justify-between border-b-2 pb-3">
                    <h2>Job Portal</h2>
                    <DottedButton className="text-lg">
                      <Link
                        href="https://hla-careers.vercel.app"
                        target="_blank"
                        className=""
                      >
                        Live Link
                      </Link>
                    </DottedButton>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center mt-5 space-x-10">
                  {/* Text */}
                  <div className="flex flex-col space-y-5">
                    <p className="text-lg text-white">
                      I spearheaded the development of a job board web
                      application tailored for a leading Chinese clothing
                      brand, with a strong emphasis on user-centric design for
                      aspiring applicants. This involved incorporating essential
                      features like a job board, application forms, tracker, and
                      dashboard to optimize user experience.
                    </p>
                    <p className="text-lg text-white">
                      However, this project is currently on hold by the company
                      due to internal affairs. The project was stopped around
                      front-end and UI/UX Design phase. That said, I took the
                      initiative to at least put the project in a functioning
                      state where an authorized or registered user can post a
                      job, and an admin can accept or reject the job listing.
                    </p>
                    <p className="text-lg text-white">
                      The project is built with Next.js, Tailwind CSS, Framer
                      Motion, Vercel Postgres, Vercel Blob, and TypeScript as
                      well.
                    </p>
                  </div>
                  {/* Image */}
                  <div>
                    <Image
                      src={HLACareersImg}
                      alt="HLA Career Image of its Hero Section"
                      className="rounded-2xl mt-5 md:mt-0"
                    />
                  </div>
                </CardContent>
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
