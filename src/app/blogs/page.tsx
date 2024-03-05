import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <main className=" px-10 max-w-screen-xl mx-auto pt-10 font-medium">
      <div>
        <DottedButton className="md:flex hidden items-center  mb-10">
          <Link href="/">Back To Home</Link>
        </DottedButton>
      </div>

      <h1 className="text-5xl font-bold tracking-tighter">Blogs</h1>

      {/* Section */}
      <section className="flex flex-col items-start">
        <div className="w-full bg-slate-800 h-[500px] mt-5 rounded-2xl">
          <h2 className="ml-5 mt-10 text-4xl tracking-tighter">
            Hi there! <br />
            <br /> The blogs section is still under development, please come
            back again!
          </h2>
        </div>
      </section>
    </main>
  );
};

export default BlogsPage;
