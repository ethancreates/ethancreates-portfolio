import { ContactAction } from "@/lib/actions";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import FormButton from "./ui/form-button";

const ContactForm = () => {
  return (
    <section>
      <form
        action={ContactAction}
        className="flex flex-col mx-1 text-3xl tracking-tight space-y-3 mt-10 leading-10"
      >
        <h2>Hi there, Ethan!</h2>
        <div className="flex items-center space-x-4">
          <h2>My name is</h2>
          <Input
            placeholder="Your name"
            name="formName"
            className="text-white font-bold tracking-tight text-lg"
            required
          />
        </div>
        <div className="flex items-center space-x-4">
          <h2>and I am representing</h2>
          <Input
            placeholder="Your Team/Company's name"
            className="text-white font-bold tracking-tight text-lg w-[300px]"
            name="formCompany"
          />
        </div>
        <div className="flex items-center space-x-4">
          <h2>I would like to inquire about your</h2>
          <Select required name="formService">
            <SelectTrigger className="w-[180px] font-bold placeholder:text-slate-500">
              <SelectValue placeholder="Which service?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
              <SelectItem value="SEO Audit">SEO Audit</SelectItem>
              <SelectItem value="SEO-Optimized Content Writing">
                SEO Content Writing
              </SelectItem>
              <SelectItem value="Complete Package">Complete Package</SelectItem>{" "}
            </SelectContent>
          </Select>
          <h2>services.</h2>
        </div>
        <div className="flex items-center space-x-4">
          <h2>I have a ready budget of</h2>
          <Select required name="formBudget">
            <SelectTrigger className="w-[180px] font-bold placeholder:text-slate-500">
              <SelectValue placeholder="..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Below $1000">Below $1,000</SelectItem>
              <SelectItem value="$1,200 - $1,500">$1,200 - $1,500</SelectItem>
              <SelectItem value="$1,501 - $1,800">$1,501 - $1,800</SelectItem>
              <SelectItem value="$2,000 and above">$2,000 and above</SelectItem>
              <SelectItem value="Hiring you full-time ($13/hr)">
                hiring you as a full-time developer ($13/hr)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col pt-5 space-y-2">
          <h2 className="text-xl">Additional Details:</h2>
          <Textarea name="formDetails" className="bg-slate-900 border-0" />
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="text-xl">You can reach me at</h2>
          <Input
            placeholder="email@email.net"
            type="email"
            className="text-white font-bold tracking-tight text-lg w-[300px]"
            name="formEmail"
            required
          />
        </div>
        <FormButton className="text-lg h-[50px]">Send Inquiry</FormButton>
      </form>
    </section>
  );
};

export default ContactForm;
