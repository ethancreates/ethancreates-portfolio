import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className="px-5 max-w-screen-xl mx-auto pt-10 font-medium">
      <div>
        <DottedButton className="md:flex hidden items-center  mb-10">
          <Link href="/">Back To Home</Link>
        </DottedButton>
      </div>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-7xl font-bold tracking-tighter border-b border-dotted pb-2">
          Projects
        </h1>
        {/* First Project */}
        <section className=" mt-14 flex flex-col items-center">
          <h2 className="text-4xl font-bold tracking-tighter  border-b border-dotted pb-2">
            Lauren Demi&apos;s UI/UX Portfolio
          </h2>
          <div className="w-[700px] h-[400px] bg-white mt-5 rounded-3xl hover:rounded-xl hover:scale-150 transition-all ease-linear"></div>
          <p className="mt-5 w-[700px] text-lg tracking-tighter">
            I was hired by Lauren, a UI/UX designer based in Boston. Initially
            she preferred to have me develop her site with Framer&apos;s no-code
            solutions. However, she was consecutively inconvinienced and charged
            by the company so she reached out to me and asked if I could code it
            manually instead of using Framer.
          </p>
          <p className="mt-5 w-[700px] text-lg tracking-tighter"></p>
        </section>
      </div>
    </main>
  );
};

export default ProjectsPage;
