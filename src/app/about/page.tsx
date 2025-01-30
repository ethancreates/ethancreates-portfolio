import DottedButton from "@/components/ui/dotted-button";
import Image from "next/image";
import Link from "next/link";
import ethanImg from "../../../public/ethan1x1hd.png";
import { FaMeta } from "react-icons/fa6";
import { SiScrimba } from "react-icons/si";
import MetaCertImg from "../../../public/CourseraMetaFrontEndCert-Image.png";
import ScrimbaCertImg from "../../../public/Screenshot 2024-03-01 at 5.02.27 PM.png";
import SkillsSection from "@/components/SkillsSection";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center p-10 max-w-screen-xl mx-auto">
      <section className="flex flex-col-reverse md:flex-row w-full mt-10">
        {/* left side */}
        <div className="md:basis-2/3 flex flex-col lg:items-start items-center overflow-y-scroll no-scrollbar max-md:mt-16">
          <DottedButton className="hidden lg:block">
            <Link href="/">Back To Home</Link>
          </DottedButton>
          <h2 className="text-4xl lg:text-6xl font-bold w-fit tracking-tighter border-b pb-4 lg:mt-10">
            Work Experience
          </h2>
          {WorkExperienceData.map((data, index) => (
            <div
              className="flex flex-col mt-10 w-[250px] lg:w-[600px] max-sm:mt-0 lg:text-2xl tracking-tighter border-b  pb-3 mb-3"
              key="index"
            >
              <h3 className="font-light text-md max-md:text-lg text-white max-md:mt-4">
                {data.date}
              </h3>
              <h3 className="mt-2 mb-1 text-xl font-bold lg:text-3xl">
                {data.position}
              </h3>
              <h3 className="text-md border-b pb-2   text-slate-300 font-light">
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
          <div className="rounded-3xl bg-clip-padding border  transition-all p-5 mb-4">
            <Image
              src={ethanImg}
              alt="Ethan Gabriel Munoz's 1x1 Portrait"
              width={250}
              className="rounded-2xl"
            />
          </div>
          <h2 className="text-5xl pb-2 tracking-tighter font-bold text-right truncate border-b max-md:text-4xl">
            Ethan Gabriel Munoz
          </h2>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tighter">
            <h3>full-stack/front-end web developer</h3>
            <h3>hello@ethancreates.dev</h3>
            <h3>www.ethancreates.dev</h3>
            <h3>Manila, Phlippines</h3>
          </div>
          {/* Certificates */}
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tighter pt-2 max-sm:scale-90">
            <h2 className="text-4xl font-bold tracking-tighter border-b  pb-2">
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
            <h2 className="text-4xl font-bold tracking-tighter border-b pb-2">
              Front-End Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={frontEndSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b pb-2">
              Back-End Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={backEndSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b pb-2">
              UI/UX Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={UIUXSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-4xl font-bold tracking-tighter border-b pb-2">
              General Skills
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={generalSkills} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-2xl font-bold tracking-tighter border-b pb-2">
              What I&apos;m Currently Aiming to Learn
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <SkillsSection data={LearningData} />
            </div>
          </div>
          <div className="text-right max-sm:text-center mt-3 text-lg tracking-tigher pt-4">
            <h2 className="text-3xl font-bold tracking-tighter border-b pb-2">
              Need a copy of my resume?
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <DottedButton className="mt-5">
                <Link
                  href="https://ethancreates.b-cdn.net/ethancreates-resume.pdf"
                  target="_blank"
                  download
                >
                  PDF Download
                </Link>
              </DottedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMePage;

const LearningData = [
  "Laravel",
  "GoLang",
  "Rust",
]

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
    date: "August 2024 - Present",
    position: "Full Stack WordPress Web Developer & UI/UX Designer",
    company: "Piper Creative/AUM Growth Marketing",
    location: "Pittsburgh, PA (Remote)",
    description: {
      first: `Collaborated closely with clients during onboarding calls to ensure their websites were tailored to their preferences and specific needs. Managed all aspects of website development, including hosting setup, DNS management, SEO, site design, copywriting, CDNs, and performance optimization.`,
      second: `Rebuilt both Piper Creative and AUM Growth Marketing websites, focusing on user experience, branding consistency, and technical excellence. Leveraged proper WordPress development to consistently achieve Google PageSpeed Insight scores of 90-100. Despite challenges in marketing AUM Growth Marketing as planned, maintained a high standard of work that earned trust and satisfaction from clients and colleagues alike.`,
      third: `Confident with my empathetic approach and clear communication during work, I strive to foster seamless coordination across teams while ensuring client satisfaction. My colleagues and leadership can vouch for my dedication, teamwork, and ability to deliver results even in challenging circumstances. Reach out to me for a list of some of my recently built WordPress websites!`,
    },
  },

  {
    date: "February 2024 - August 2024",
    position: "Full-Stack Web Developer & UI/UX Designer",
    company: "Lauren Demi Design",
    location: "Boston, MA (Remote)",
    description: {
      first: `From initial LinkedIn outreach to final delivery, maintained clear communication to ensure we aligned on every design decision. Transformed a client's Framer website into a custom-coded solution after she encountered platform limitations. `,
      second: `Built her designer portfolio using Next.js and Tailwind CSS, adding smooth animations with Framer Motion. What started as mobile optimization became a complete platform migration - a challenge I gladly embraced to deliver better performance and SEO results.`,
      third: ` `,
    },
  },
  {
    date: "November 2023 - January 2024",
    position: "Front End Web Developer",
    company: "Chinese Company (Under NDA)",
    location: "Manila, Philippines",
    description: {
      first: `Collaborated with a cross-functional team to create a job portal MVP. Took ownership of the front-end development after co-designing the Figma prototypes, earning the team's trust to make technical decisions on component libraries and state management.`,
      second: `When the project paused, I independently completed the full-stack version using Prisma and Postgres. Now it's a functional demo I'm proud to show off - feel free to test the admin features by reaching out!`,
      third: `This experience taught me the value of adaptable planning - sometimes the best solutions emerge when initial plans change.`,
    },
  },
  {
    date: "October 2022 - September 2023",
    position: "SEO Content Writer & Web Developer",
    company: "No-BS Marketplace",
    location: "South Geelong, Victoria, Australia (Remote)",
    description: {
      first: `Started as an SEO writer producing 10k+ words weekly, but my curiosity for development opened new opportunities. Began suggesting WordPress improvements during content submissions, which led to handling site maintenance and customizations.`,
      second: `Earned the team's trust to balance writing with technical tasks - whether optimizing a blog post or tweaking site CSS. This hybrid role let me grow both skills simultaneously while delivering exactly what the team needed most each week.`,
      third: `The perfect bridge between my writing career and tech transition. Left on good terms to pursue development full-time, with grateful clients who still reach out for occasional projects.`,
    },
  },
  {
    date: "June 2021 - August 2022",
    position: "Amazon Account Manager & Junior Web Developer",
    company: "Northern Response International Ltd.",
    location: "Toronto, Ontario, Canada (Remote)",
    description: {
      first: `Proved my dual-value by boosting Amazon sales through listing optimizations while gradually taking on Shopify development tasks. Managers noticed my tech aptitude and encouraged me to learn Ruby for backend improvements.`,
      second: `That first "Can you help with..." request led to maintaining core site features. Loved finding solutions that satisfied both marketing goals and technical requirements.`,
      third: `Left having modernized their approach to data tracking - a win for both the marketing and dev teams.`,
    },
  },
  {
    date: "March 2020 - April 2021",
    position: "Amazon Account Manager & Team Leader",
    company: "Ovente",
    location: "Vernon, CA, USA (Remote)",
    description: {
      first: `Cut my teeth managing top-selling products on Amazon while mentoring two team members. Found creative ways to apply my growing coding knowledge to automate reports and track keyword rankings.`,
      second: `The thrill of seeing our products rank #1 never got old! But I knew my future was in building things, not just selling them.`,
      third: `Grateful for leaders who supported my learning journey - even let me prototype simple tools that boosted our workflow efficiency.`,
    },
  },
]

