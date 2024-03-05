import { cn } from "@/lib/utils";

type DottedButtonProps = {
  children: React.ReactNode;

  className?: string;
};

const DottedButton = ({ children, className }: DottedButtonProps) => {
  return (
    <button
      className={cn(
        className,
        "rounded-md border border-dashed border-white bg-slate-900 px-6 font-light uppercase h-12  text-white transition-all duration-300  hover:translate-y-[10px] hover:rounded-2xl  active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none"
      )}
    >
      {children}
    </button>
  );
};

export default DottedButton;
