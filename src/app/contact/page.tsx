"use client";

import { Button } from "@/components/ui/button";
import z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import DottedButton from "@/components/ui/dotted-button";
import Link from "next/link";

const ContactPage = () => {
  const FormSchema = z.object({
    formName: z.string().min(1, "Name is required"),
    formCompany: z.optional(
      z.string().min(1, "Please input the whole company name")
    ),
    formService: z.string().min(2, "Service is required"),
    formBudget: z.string().min(2, "Budget is required"),
    formDescription: z.optional(
      z
        .string()
        .min(
          5,
          "Minimum characters for the description is 5, so please provide more details"
        )
    ),
    formEmail: z.string().email("Please input a valid email"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <main className="px-5 max-md:px-10  max-w-screen-xl mx-auto pt-10 font-medium">
      {/* Top Part */}
      <div className="flex flex-col items-start">
        <DottedButton className="mt-1 lg:mt-10 mb-20">
          <Link href="/">
            <p className="text-lg">Back to Home</p>
          </Link>
        </DottedButton>
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter border-b  pb-2">
          Contact
        </h1>
        <h2 className="text-xl mt-5 text-slate-400  tracking-tighter">
          let&apos;s finalize your design with precision & let me develop it for
          performance!
        </h2>
      </div>

      {/* Form Part */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col text-4xl text-pretty mt-20 tracking-tighter">
            <h2 className="tracking-tighter text-4xl  lg:text-5xl">
              Hi there, <span className="italic">Ethan!</span>{" "}
            </h2>
            {/* Form-Taker's Name */}
            <div className="flex items-center mt-10">
              <p className="mr-3 max-md:text-2xl">My name is</p>
              <FormField
                control={form.control}
                name="formName"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="Your Name*"
                        className="bg-slate-950 text-3xl w-[200px]  lg:w-[400px] border-b "
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Form-Taker's Company */}
            <div className="flex items-center mt-5">
              <p className="mr-3 max-md:text-2xl">& I am working at</p>
              <FormField
                control={form.control}
                name="formCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="Your Team/Company's Name"
                        className="bg-slate-950 text-lg  lg:text-3xl w-[200px]  lg:w-[500px]  border-b"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <span className="ml-2">,</span>
            </div>
            {/* Form-Taker's Service Chosen */}
            <div className="flex flex-col lg:flex-row space-y-3 items-center   max-md:items-start mt-5">
              <p className="mr-3 max-md:text-2xl">
                I would like to inquire about your
              </p>
              <FormField
                control={form.control}
                name="formService"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormMessage />
                      <FormControl>
                        <SelectTrigger className="text-lg  lg:text-2xl px-5 h-[60px] mx-1 bg-slate-950 border ">
                          <SelectValue placeholder="Web Development*" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="UI/UX Design">
                          UI/UX Design
                        </SelectItem>
                        <SelectItem value="SEO Audit">SEO Audit</SelectItem>
                        <SelectItem value="SEO-Optimized Content Writing">
                          SEO Content Writing
                        </SelectItem>
                        <SelectItem value="Complete Package">
                          Complete Package
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <span className="md:ml-3 max-md:text-2xl">services ,</span>
            </div>
            {/* Form-Taker's Service Chosen */}
            <div className="flex flex-col lg:flex-row space-y-3 items-center  max-md:items-start mt-5">
              <p className="mr-3 max-md:text-xl">I have a ready budget of</p>
              <FormField
                control={form.control}
                name="formBudget"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-2xl px-5 h-[60px] mx-1  border bg-slate-950 ">
                          <SelectValue placeholder=" $1,200 - $1,500*" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Below $1000">
                          Below $1,000
                        </SelectItem>
                        <SelectItem value="$1,200 - $1,500">
                          $1,200 - $1,500
                        </SelectItem>
                        <SelectItem value="$1,501 - $1,800">
                          $1,501 - $1,800
                        </SelectItem>
                        <SelectItem value="$2,000 and above">
                          $2,000 and above
                        </SelectItem>
                        <SelectItem value="Hiring you full-time ($13/hr)">
                          hiring you as a full-time developer ($13/hr)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <span className="md:ml-3 max-md:text-2xl">USD.</span>
            </div>
            {/* Form-Taker's Additional Details */}
            <div className="flex flex-col items-start mt-14">
              <p className="mr-3 text-xl  lg:text-2xl">Additional Details:</p>
              <FormField
                control={form.control}
                name="formDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Textarea
                        placeholder="I would like you to create a responsive and modern website for my business! I want you to make it SEO-optimzed and I want it to be fast and secure. I want it to be a complete package!"
                        className="px-8 py-3 bg-slate-950 text-sm  lg:text-xl w-[1100px] rounded-2xl mt-5 max-md:w-full min-w-80  h-[150px] "
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Form-Taker's Email */}
            <div className="flex items-center mt-5 text-2xl">
              <p className="mr-3 max-md:text-[20px]">You can reach me at</p>
              <FormField
                control={form.control}
                name="formEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="email123@mailprovider.com*"
                        className="bg-slate-950 text-sm  lg:text-2xl w-[180px]  lg:w-[350px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* Submit Button */}
          <Button
            type="submit"
            disabled
            className="my-12 lg:w-[1100px] max-sm:w-[300px] text-2xl py-10 rounded-2xl border  bg-scale-950 uppercase hover:text-slate-950 transition-all tracking-tighter hover:bg-gray-400"
          >
            Send Inquiry
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default ContactPage;
