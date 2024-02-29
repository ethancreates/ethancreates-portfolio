import DottedButton from "@/components/ui/dotted-button";
import Image from "next/image";
import Link from "next/link";
import ethanImg from "../../../public/ethan1x1hd.png";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center p-10 max-w-screen-xl mx-auto">
      {/* top part */}
      <div className="flex flex-col items-center max-sm:hidden">
        <div className="flex space-x-3">
          <DottedButton>
            <Link href="/">Home</Link>
          </DottedButton>
          <DottedButton>
            <Link href="/projects">Projects</Link>
          </DottedButton>
          <DottedButton>
            <Link href="/contact">Contact</Link>
          </DottedButton>
        </div>
      </div>
      <section className="flex flex-col-reverse md:flex-row w-full mt-10">
        {/* left side */}
        <div className="md:basis-2/3 flex flex-col lg:items-start items-center overflow-y-scroll no-scrollbar max-md:mt-16">
          <h2 className="text-4xl lg:text-6xl font-bold w-fit tracking-tighter border-b border-dotted pb-2">
            Work Experience
          </h2>
          {WorkExperienceData.map((data, index) => (
            <div
              className="flex flex-col mt-3 max-sm:mt-0 lg:text-2xl tracking-tighter border-b border-dotted pb-3 mb-3 max-md:text-pretty max-md:text-2xl max-md:w-[400px]"
              key="index"
            >
              <h3 className="font-light text-white max-md:mt-4">{data.date}</h3>
              <h3 className="mt-2 font-bold">{data.position}</h3>
              <h3 className="text-xl  text-slate-300 font-light">
                {data.company} - {data.location}
              </h3>
              <h4 className="text-lg  max-sm:mt-5 text-slate-300 border-t border-dotted pt-2 mt-2 w-[550px] max-md:w-[400px]">
                {data.description.first}
              </h4>
              <h4 className="text-lg  max-sm:mt-5 text-slate-300 mt-2 w-[550px] max-md:w-[400px]">
                {data.description.second}
              </h4>
              <h4 className="text-lg  max-sm:mt-5 text-slate-300 mt-2 w-[550px] max-md:w-[400px]">
                {data.description.third}
              </h4>
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="md:basis-1/3 flex flex-col lg:items-end items-center h-fit">
          <div className="rounded-3xl bg-clip-padding border border-dotted transition-all hover:p-5 mb-4">
            <Image
              src={ethanImg}
              alt="Ethan Gabriel Munoz's 1x1 Portrait"
              width={250}
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-5xl pb-2 tracking-tighter font-bold text-right truncate border-b border-dotted max-md:text-4xl">
            Ethan Gabriel Munoz
          </h2>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tighter">
            <h3>full-stack/front-end web developer</h3>
            <h3>ethancreates@proton.me</h3>
            <h3>(+63)917-656-6479</h3>
            <h3>Manila, Phlippines</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;

const WorkExperienceData = [
  {
    date: "2024 - Present",
    position: "Full-Stack Web Developer & UI/UX Designer",
    company: "Lauren Demi Design",
    location: "Boston, MA (Remote)",
    description: {
      first: `Developed and designed a UI/UX portfolio for Lauren, a UI/UX Designer herself, based in Boston. The website is built with the latest technologies including Next.js, TailwindCSS, Framer Motion, and Resend, showcasing a cutting-edge approach to web development.`,
      second: `This project leverages the power and flexibility of Next.js, a React framework that has been adopted by industry giants such as Netflix, Twitch, TikTok, Hulu, Notion, HBO, and more, for its unparalleled performance, efficiency, and developer experience.`,
      third: `This portfolio not only serves as a platform to showcase Lauren's work but also stands as a testament to my expertise in creating high-performance, visually appealing web applications that are both scalable and SEO-friendly.`,
    },
  },
  {
    date: "2023 - Pending",
    position: "Full-Stack Web Developer",
    company: "HLA Careers Phlippines",
    location: "Manila, Phlippines",
    description: {
      first: `Designed and developed a job portal for a Chinese apparel brand, HLA. The website was initially built with Next.js, Tailwind CSS, Framer Motion, Reach-Hook-Table, and Shadcn-UI.`,
      second: `However the project was later paused due to internal delays and the website wasn't officially deployed`,
      third: `The job portal was designed to be user-friendly, responsive, and modern, with a focus on scalability and security.`,
    },
  },
  {
    date: "2022-2023",
    position: "SEO Content Writer",
    company: "No-BS Marketplace",
    location: "South Geelong, Victoria, Australia (Remote)",
    description: {
      first: `Wrote SEO-optimized content for No-BS Marketplace, an Australian-based digital marketing company that specializes in content writing, SEO, and domain authority.`,
      second: `The company placed me on the premium team, which is responsible for writing content for the company's highest paying clients.`,
      third: `I was able to write about a wide range of topics, including but not limited to, digital marketing, SEO, web development, and more. I was also able to write for clients in various industries, such as real estate, finance, and health and wellness.`,
    },
  },
];
