import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <main className=" px-10 max-w-screen-xl mx-auto pt-10 font-medium">
      <div>
        <DottedButton className="md:flex hidden items-center  mb-10">
          <Link href="/">Back To Home</Link>
        </DottedButton>
      </div>

      <h1 className="text-5xl font-bold tracking-tighter">Projects</h1>

      {/* Section */}
      <section className="flex flex-col items-start"></section>
    </main>
  );
};

export default ProjectsPage;
