import MainButton from "@/components/ui/dotted-button";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <main className="grid justify-start mt-10 px-10">
        <MainButton className="w-fit">
          <Link href="/" className="font-medium tracking-tighter px-0">
            Back to Home
          </Link>
        </MainButton>
        <h1 className="text-6xl font-bold tracking-tighter mt-5">Contact Me</h1>
        <p className="text-slate-400 text-[17px] tracking-tighter ml-1 mt-2">
          Let&apos;s start building your website the right way. <br /> Whether
          you have a clear vision or need some guidance, I&apos;m here to help
          bring your ideas to life. <br /> Fill out the form below or reach out
          directly via <a href="hello@ethancreates.dev">email</a>. I look
          forward to collaborating with you!
        </p>
        <ContactForm />
      </main>
    </>
  );
};

export default ContactPage;
