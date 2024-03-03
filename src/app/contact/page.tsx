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
    <main className="px-5 max-w-screen-xl mx-auto pt-10 font-medium">
      <DottedButton className="mb-10">
        <Link href="/">Back To Home</Link>
      </DottedButton>
      {/* Top Part */}
      <div className="flex flex-col items-start">
        <h1 className="text-7xl font-bold tracking-tighter border-b border-dotted pb-2">
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
          <div className="flex flex-col text-5xl text-pretty mt-10 tracking-tighter space-y-16">
            <h2 className="tracking-tighter">
              Hi there, <span className="italic">Ethan!</span>{" "}
            </h2>
            {/* Form-Taker's Name */}
            <div className="flex items-center mt-10">
              <p className="mr-3">My name is</p>
              <FormField
                control={form.control}
                name="formName"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="Your Name*"
                        className="bg-slate-950 text-3xl w-[400px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Form-Taker's Company */}
            <div className="flex items-center mt-5">
              <p className="mr-3">& I am working at</p>
              <FormField
                control={form.control}
                name="formCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="Your Team/Company's Name"
                        className="bg-slate-950 text-3xl w-[500px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <span className="ml-2">,</span>
            </div>
            {/* Form-Taker's Service Chosen */}
            <div className="flex items-center mt-5">
              <p className="mr-3">I would like to inquire about your</p>
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
                        <SelectTrigger className="text-2xl px-5 h-[60px] mx-1">
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
                          SEO-Optimized Content Writing
                        </SelectItem>
                        <SelectItem value="Complete Package">
                          Complete Package
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <span className="ml-3">services ,</span>
            </div>
            {/* Form-Taker's Service Chosen */}
            <div className="flex items-center mt-5">
              <p className="mr-3">I have a ready budget of</p>
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
                        <SelectTrigger className="text-2xl px-5 h-[60px] mx-1">
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
              <span className="ml-3">USD.</span>
            </div>
            {/* Form-Taker's Additional Details */}
            <div className="flex flex-col items-start mt-14">
              <p className="mr-3">Additional Details:</p>
              <FormField
                control={form.control}
                name="formDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Textarea
                        placeholder="I would like you to create a responsive and modern website for my business! I want you to make it SEO-optimzed and I want it to be fast and secure. I want it to be a complete package!"
                        className="p-5 bg-slate-950 text-2xl w-[1100px] rounded-2xl mt-5 max-sm:w-[500px] h-[150px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Form-Taker's Email */}
            <div className="flex items-center mt-5 text-2xl">
              <p className="mr-3">You can reach me at</p>
              <FormField
                control={form.control}
                name="formEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage />
                    <FormControl>
                      <Input
                        placeholder="email123@mailprovider.com*"
                        className="bg-slate-950 text-2xl w-[350px]"
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
            className="my-7 w-[1100px] max-sm:w-[500px] text-2xl py-10 rounded-2xl"
          >
            Send Inquiry
          </Button>
        </form>
      </Form>
    </main>
  );
};

export default ContactPage;
