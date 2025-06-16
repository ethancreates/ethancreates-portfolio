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
    date: "February 2025 -  March 2025",
    position: "WordPress Web Developer",
    company: "Better Image Solutions",
    location: "Canada (Remote)",
    description: {
      first: (
        <>
          <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
            <li className="list-disc">
              <strong className="text-[20px] text-white">Third-Party CMS-to-WordPress Transitions:</strong><br></br> Migration of client websites from a legacy third-party white-label CMS to WordPress, utilizing Elementor for efficient page building and design fidelity. Consistently completed first-version (v1) site conversions within a single day per project.
            </li>
          </ul>
        </>
      ),
    }
  },
    

  {
    date: "August 2024 -  February 2025",
    position: "Full Stack WordPress Web Developer & UI/UX Designer",
    company: "Piper Creative/AUM Growth Marketing",
    location: "Pittsburgh, PA (Remote)",
    description: {
      first: (
        <>
          <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
            <li className="list-disc">
              <strong className="text-[20px] text-white">Client-Centric Onboarding & Collaboration:</strong><br></br> Led onboarding calls to deeply understand client needs, preferences, and business goals, ensuring every website was uniquely tailored for maximum impact. Established strong, trust-based relationships with clients through clear, empathetic communication and proactive project updates.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Full-Spectrum Website Development:</strong><br></br> Managed end-to-end website creation, including hosting setup, DNS management, SEO optimization, site design, copywriting, CDN integration, and performance tuning. Specialized in WordPress development, consistently achieving Google PageSpeed Insight scores of 90–100 for all delivered projects.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Strategic Website Rebuilds:</strong> <br></br> Rebuilt the Piper Creative and AUM Growth Marketing websites with a focus on user experience, branding consistency, and technical excellence. Delivered visually compelling, high-performing sites that reinforced brand identity and improved user engagement.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Performance & Quality Assurance:</strong><br></br> Prioritized site speed, accessibility, and SEO best practices to drive measurable improvements in website performance and search rankings. Maintained a high standard of work, consistently earning positive feedback and trust from clients and colleagues.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Teamwork & Leadership:</strong><br></br> Fostered seamless coordination across cross-functional teams, ensuring projects were delivered on time and to specification—even in high-pressure situations. Recognized for dedication, reliability, and a results-driven mindset by both peers and leadership.
            </li>
          </ul>
        </>
      ),
    }
    
  },

  {
    date: "February 2024 - August 2024",
    position: "Full-Stack Web Developer & UI/UX Designer",
    company: "Lauren Demi Design",
    location: "Boston, MA (Remote)",
description: {
  first: (
    <>  
      <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
        <li className="list-disc">
          <strong className="text-[20px] text-white">End-to-End Client Communication:</strong><br></br> Maintained clear and consistent communication from initial LinkedIn outreach through final delivery, ensuring alignment on every design and development decision.
        </li>
        <li className="list-disc">
          <strong className="text-[20px] text-white">Custom Platform Migration & Development:</strong><br></br> Transformed a client’s Framer website into a fully custom-coded solution using Next.js, React, Tailwind CSS, Framer Motion, Shadcn-UI, and Resend API after platform limitations and support disputes.
        </li>
        <li className="list-disc">
          <strong className="text-[20px] text-white">Performance & SEO Optimization:</strong><br></br> Leveraged Next.js for superior performance and SEO benefits, successfully migrating the entire portfolio site to improve mobile responsiveness, speed, and search engine rankings.
        </li>
        <li className="list-disc">
          <strong className="text-[20px] text-white">UI/UX Design & Animation:</strong><br></br> Built a designer portfolio with smooth animations and interactive elements using Framer Motion, enhancing user engagement and visual appeal.
        </li>
        <li className="list-disc">
          <strong className="text-[20px] text-white">Challenge Embracement & Problem Solving:</strong><br></br> Took on the complex challenge of a full platform migration to deliver a superior user experience, exceeding client expectations despite initial project scope changes.
        </li>
      </ul>

    </>
  ),
}
  },
  {
    date: "November 2023 - January 2024",
    position: "Front End Web Developer",
    company: "Chinese Company (Under NDA)",
    location: "Manila, Philippines",
    description: {
      first: (
        <>
          <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
            <li className="list-disc">
              <strong className="text-[20px] text-white">Cross-Functional Collaboration & Design:</strong><br></br> Partnered with a team to co-design Figma prototypes and took ownership of front-end development using Next.js, Tailwind CSS, Framer Motion, React-Hook-Form & Table, and Shadcn-UI, earning trust to lead technical decisions on component libraries and state management.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Full-Stack Development & Independent Delivery:</strong><br></br> After the project paused, independently completed the full-stack MVP using Prisma ORM and Postgres, delivering a functional job portal demo available for portfolio review and admin feature testing upon request.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Adaptable Planning & Problem Solving:</strong><br></br> Gained valuable experience in flexible project management and solution-finding when initial plans shifted, strengthening teamwork and full-stack development skills under changing circumstances.
            </li>
          </ul>
        </>
      ),
    }
  },
  {
    date: "October 2022 - September 2023",
    position: "SEO Content Writer & Web Developer",
    company: "No-BS Marketplace",
    location: "South Geelong, Victoria, Australia (Remote)",
    description: {
      first: (
        <>
          <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
            <li className="list-disc">
              <strong className="text-[20px] text-white">High-Volume SEO Content Creation:</strong><br></br> Produced over 10,000 words weekly on diverse topics (750–2,500 words per article), consistently delivering quality content that met tight deadlines and varied subject matter.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Proactive WordPress Site Maintenance & Customization:</strong><br></br> Took initiative to maintain and customize company WordPress sites, performing site optimizations and CSS tweaks to improve performance and user experience alongside content responsibilities.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Hybrid Role Development & Growth:</strong><br></br> Balanced content creation with technical web development tasks, accelerating skills in both areas and contributing to team needs without formal management duties.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Professional Transition & Continued Client Relations:</strong><br></br> Left on good terms to pursue full-time programming supported by Meta certifications, while maintaining ongoing client relationships for occasional projects.
            </li>
          </ul>

        </>

      ),
    }
    
  },
  {
    date: "June 2021 - August 2022",
    position: "Amazon Account Manager & Junior Web Developer",
    company: "Northern Response International Ltd.",
    location: "Toronto, Ontario, Canada (Remote)",
    description: {
      first: (
        <>
          <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
            <li className="list-disc">
              <strong className="text-[20px] text-white">Dual-Role Performance & Sales Optimization:</strong><br></br> Boosted Amazon sales by auditing and optimizing 160+ product listings across US, Canada, and Mexico accounts, improving organic rankings and PPC campaign effectiveness.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Progressive Shopify Development & Technical Growth:</strong><br></br> Took initiative to support Shopify site maintenance and development, learning Ruby to enhance backend features and deliver solutions balancing marketing goals with technical requirements.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Cross-Functional Impact & Modernization:</strong><br></br> Modernized data tracking approaches, fostering improved collaboration between marketing and development teams and leaving a lasting positive impact on business processes.
            </li>
          </ul>

        </>
      ),
    }
    
  },
  {
    date: "March 2020 - April 2021",
    position: "Amazon Account Manager & Team Leader",
    company: "Ovente",
    location: "Vernon, CA, USA (Remote)",
    description: {
      first: (
        <>
          <ul className="list-disc list-inside space-y-3 text-slate-300 mt-3">
            <li className="list-disc">
              <strong className="text-[20px] text-white">Amazon Product Management & Team Mentorship:</strong><br></br> Managed top 50 SKUs across two product categories, mentoring two team members to improve organic rankings through listing optimization, keyword research, and promotion planning.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">PPC Campaign Oversight & Performance:</strong><br></br> Directed PPC campaigns targeting strategic keywords, consistently maintaining over half the SKUs ranked on page 1 or 2 for main keywords.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Automation & Workflow Efficiency:</strong><br></br> Leveraged growing coding skills to automate reports and track keyword rankings, prototyping simple tools that significantly boosted workflow efficiency.
            </li>
            <li className="list-disc">
              <strong className="text-[20px] text-white">Passion for Building Solutions:</strong><br></br> Embraced a future focused on creating tools and solutions beyond selling, continuously upskilling in SEO, web development, and digital marketing with strong leadership support.
            </li>
          </ul>

        </>
      ),
    }
    
  },
]

