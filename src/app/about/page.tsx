import DottedButton from "@/components/ui/dotted-button";
import Image from "next/image";
import Link from "next/link";
import ethanImg from "../../../public/ethan1x1hd.png";
import { FaMeta } from "react-icons/fa6";
import { SiScrimba } from "react-icons/si";
import MetaCertImg from "../../../public/Screenshot 2024-03-01 at 4.50.35 PM.png";
import ScrimbaCertImg from "../../../public/Screenshot 2024-03-01 at 5.02.27 PM.png";
import SkillsSection from "@/components/SkillsSection";
import FrontEndSkillsSection from "@/components/SkillsSection";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center p-10 max-w-screen-xl mx-auto">
      <section className="flex flex-col-reverse md:flex-row w-full mt-10">
        {/* left side */}
        <div className="md:basis-2/3 flex flex-col lg:items-start items-center overflow-y-scroll no-scrollbar max-md:mt-16">
          <DottedButton className="hidden lg:block">
            <Link href="/">Back To Home</Link>
          </DottedButton>
          <h2 className="text-4xl lg:text-6xl font-bold w-fit tracking-tighter border-b border-dotted pb-4 lg:mt-10">
            Work Experience
          </h2>
          {WorkExperienceData.map((data, index) => (
            <div
              className="flex flex-col mt-10 w-[250px] lg:w-[600px] max-sm:mt-0 lg:text-2xl tracking-tighter border-b border-dotted pb-3 mb-3"
              key="index"
            >
              <h3 className="font-light text-md max-md:text-lg text-white max-md:mt-4">
                {data.date}
              </h3>
              <h3 className="mt-2 mb-1 text-xl font-bold lg:text-3xl">
                {data.position}
              </h3>
              <h3 className="text-md border-b pb-2 border-dotted   text-slate-300 font-light">
                {data.company} - {data.location}
              </h3>
              <h4 className="text-[18px] mt-2">{data.description.first}</h4>
              <h4 className="text-[18px] mt-2">{data.description.second}</h4>
              <h4 className="text-[18px] mt-2">{data.description.third}</h4>
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="md:basis-1/3 flex flex-col lg:items-end items-center h-fit">
          {/* Name, General Details */}
          <div className="rounded-3xl bg-clip-padding border border-dotted transition-all p-5 mb-4">
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
            <h3>ethan@ethancreates.dev</h3>
            <h3>ethancreates@proton.me</h3>
            <h3>(+63)917-656-6479</h3>
            <h3>Manila, Phlippines</h3>
          </div>
          {/* Certificates */}
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tighter pt-2 max-sm:scale-90">
            <h2 className="text-4xl font-bold tracking-tighter border-b border-dotted pb-2">
              Certificates
            </h2>
            <div className="flex flex-col items-end max-sm:items-center">
              <div className="flex text-white space-x-1 items-center mt-2">
                <FaMeta />
                <h3>Meta&apos;s Front-End Developer Professional Certficate</h3>
              </div>
              <div
                className="
              flex flex-col items-center"
              >
                <Image
                  src={MetaCertImg}
                  alt="Meta's Front-End Developer Professional Certficate"
                  width={300}
                  className="rounded-2xl p-2"
                />
                <DottedButton className="text-sm my-2">
                  <Link
                    href="/CourseraMetaFrontEndCert.pdf"
                    target="_blank"
                    download
                  >
                    View Certificate
                  </Link>
                </DottedButton>
              </div>
              <div className="flex items-center  text-white space-x-1 mt-2">
                <SiScrimba />
                <h3>Scrimba&apos;s Frontend Developer Career Path</h3>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={ScrimbaCertImg}
                  alt="Scrimba's Frontend Developer Career Path"
                  width={300}
                  className="rounded-2xl p-2"
                />
                <DottedButton className="text-sm my-2">
                  <Link
                    href="/ScrimbaFrontEndCert.pdf"
                    target="_blank"
                    download
                  >
                    View Certificate
                  </Link>
                </DottedButton>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b border-dotted pb-2">
              Front-End Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={frontEndSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b border-dotted pb-2">
              Back-End Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={backEndSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b border-dotted pb-2">
              UI/UX Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={UIUXSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b border-dotted pb-2">
              General Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={generalSkills} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;

const SkillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Reach Hook Table",
  "Shadcn UI",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Kinde-Auth",
  "Clerk-Auth",
  "Supabase",
  "Postgres",
  "MySQL",
  "Prisma",
  "Drizzle",
  "Payload",
];

const frontEndSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Shadcn-UI",
  "React Query/Tanstack Query",
  "Tanstack Table",
  "React Hook Form",
  "Zod",
  "Wordpress/Elementor",
  "Framer",
  "Webflow",
];

const backEndSkills = [
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Kinde-Auth",
  "Clerk-Auth",
  "NextAuth.js",
  "Supabase",
  "Postgres",
  "MySQL",
  "Prisma",
  "Drizzle",
  "Payload CMS",
  "Thunder Client",
  "Postman",
  "tRPC",
  "PHP",
];

const UIUXSkills = [
  "Figma",
  "Adobe Photoshop",
  "Canva",
  "Wireframing",
  "Prototyping",
  "User Research",
  "User Flows",
  "User Personas",
  "Brand Identity",
  "Typography",
];

const generalSkills = [
  "Keyword Research",
  "Content Writing",
  "Amazon PPC/Ads",
  "Search Engine Optimization",
  "Time Management",
  "Attention to Detail",
];

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
    company: "HLA Careers Philppines",
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
  {
    date: "2021-2022",
    position: "Amazon Account Manager",
    company: "Northern Response International Ltd.",
    location: "Toronto, Ontario, Canada (Remote)",
    description: {
      first: `I was tasked to manage the US, CA, and MX Amazon Accounts for Northern Response International Ltd., a Canadian-based company that specializes in direct response marketing.`,
      second: `My duties included overseeing the Amazon accounts for the US, Canada, and Mexico. This involved auditing and adjusting over 160 product listings (SKUs) to ensure they were optimized and competitive. Part of my role also included enhancing existing product listings with better SEO and PPC keywords to improve visibility and sales.`,
      third: `Given the large number of SKUs under my management, I was responsible for generating weekly reports for our clients. These reports provided insights into sales performance, product rankings, and overall account health, allowing our clients to make informed decisions about their product strategies on Amazon.`,
    },
  },
];
