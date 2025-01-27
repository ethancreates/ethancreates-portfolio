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
            <h2 className="text-3xl font-bold tracking-tighter border-b pb-2">
              Need a copy of my resume?
            </h2>
            <div className="flex flex-col lg:items-end items-center">
              <DottedButton className="mt-5">
                <Link
                  href="https://ethancreates.b-cdn.net/ethancreates-resume-website.pdf"
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
    date: "February 2024 - September 2024",
    position: "Full-Stack Web Developer & UI/UX Designer",
    company: "Lauren Demi Design",
    location: "Boston, MA (Remote)",
    description: {
      first: `I was reached out by her assistant via LinkedIn, initially I was hired to convert her Framer website to be more mobile responsive, however after 2 days, she had a dispute issue with Framer and asked me if I can just build it via code, which I confidently said yes.`,
      second: `I built her UI/UX Designer portfolio with Next.js, React, Tailwind CSS, Framer Motion, Shadcn-UI and Resend API. We went with Next.js because of the performance and how easy the DX is to improve the SEO of all of her pages.`,
      third: `Currently the website is 90% done, only reason why it's still on going is because there are 2 case studies missing to complete the site, but she has taken a small hiatus from it due to having the need to move from Puerto Rico, back to the US. Once she's finished with the case studies and sends me the data, the site and project should be finished after a weekend or two.`,
    },
  },
  {
    date: "November 2023 - January 2024",
    position: "Front End Web Developer",
    company: "Anonymous Client - Job Portal",
    location: "Manila, Phlippines",
    description: {
      first: `I was referred by a friend to their team to help them design and build their Job Portal, this was a part-time position. I coordinated with them when working on the design via Figma first, and build the front-end soon after. I was able to do so, by utilizing one of the industry standard React framework, Next.js. Coupled with Tailwind CSS for styling, Framer Motion for animations, React-Hook-Table&Form, & lastly Shadcn-UI as an unstyled component library.`,
      second: `Sadly the project got axed due to internal issues. Personally, I was devastated as I was highly motivated to finish the project. Recently I finished not only the front-end but the backend as well with my new found knowledge. I used Prisma as an ORM and Postgres for the database. You can view it at my projects section.`,
      third: `Keep in mind this is just an MVP but everything should function, if you're interested to post a job, I can accept it via the Admin Dashboard to test the functionality, just reach out to hello@ethancreates.dev`,
    },
  },
  {
    date: "October 2022 - September 2023",
    position: "SEO Content Writer & Web Developer",
    company: "No-BS Marketplace",
    location: "South Geelong, Victoria, Australia (Remote)",
    description: {
      first: `Wrote SEO blog posts for No-BS Marketplace, an Australian-based digital marketing company that specializes in content writing, SEO, and domain authority. I was reached out by an old colleague for the position, while I was still diving into Web Development studies and courses.`,
      second: `It was a great fit as the tasks weren't as demanding as my previous roles, and I didn't manage anyone as well, it was purely non-stop writing blog posts about various topics, word count ranges from 750 words to 2500 words per article, regularly wrote at least 10,000 words per week.`,
      third: `Midway, I was able to take initiative of taking care of some of the companies WordPress sites, at this point my work load was very volatile, shifting from more writing to more web dev, and vice versa depending on what the team needed more. Soon after, I left the team to pursue programming as a full-time profession, which I also took some courses from Meta as they tests and certifications to ensure I have what it takes to be a dev.`,
    },
  },
  {
    date: "June 2021 - August 2022",
    position: "Amazon Account Manager & Junior Web Developer",
    company: "Northern Response International Ltd.",
    location: "Toronto, Ontario, Canada (Remote)",
    description: {
      first: `I was tasked to manage the US, CA, and MX Amazon Accounts for Northern Response International Ltd., a Canadian-based company that specializes in direct response marketing. However, they felt the need to modernize their approach, thus they ventured out to Amazon's platform. Luckily, I was able to find their job listing at the time, and after an interview, we felt like a great match with my experience and eagerness to help out!`,
      second: `My duties included overseeing the Amazon accounts for the US, Canada, and Mexico. This involved auditing and adjusting over 160 product listings (SKUs) to ensure they were optimized and competitive in regards to organic rankings and PPC campaigns.`,
      third: `I also took on another role midway my tenure as a Junior Web Developer, tasked to maintain and handle some minor front-end and back-end tasks for their Shopify site, I was able to learn Ruby (programming language) and I was getting more and more fascinated with web development and programming.`,
    },
  },
  {
    date: "March 2020 - April 2021",
    position: "Amazon Account Manager & Team Leader",
    company: "Ovente",
    location: "Vernon, CA, USA (Remote)",
    description: {
      first: `Started my career remotely, I was tasked to manage the top 50 SKUs of two categories in our product lineup. I was also in-charge of two team members to help me cater to all SKUs and improve organic rankings through Listing Optimization, Keyword Research and proper planning for possible promotions.`,
      second: `Speaking of promotions, I was also managing the PPC for these SKUs and improve the overall ranking of the product by targeting well thought-out keywords.`,
      third: `I was able to consistently keep more than half of the SKUs within page 1 and 2 of their main keywords. During my tenure, I made sure to not stop learning and upskilling, learning more about SEO and slowly learning more in-depth about Web Development and Digital Marketing as a whole.`,
    },
  },
];
