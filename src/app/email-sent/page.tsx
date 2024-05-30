import MainButton from "@/components/ui/dotted-button";
import React from "react";
import Link from "next/link";

const EmailSentPage = () => {
  return (
    <main className="flex flex-col tracking-tighter items-center space-y-5 mt-10">
      <h1 className="text-5xl font-bold">Email sent!</h1>
      <p className="text-slate-400">
        Please do check you mail within 24-48 hours for a response!
      </p>
      <MainButton>
        <Link href="/">Go back Home</Link>
      </MainButton>
    </main>
  );
};

export default EmailSentPage;
