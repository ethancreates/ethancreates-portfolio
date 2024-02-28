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
        "rounded-2xl border border-dashed border-white bg-slate-950 px-6 py-3 font-light uppercase text-white transition-all duration-300  hover:translate-y-[10px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
      )}
    >
      {children}
    </button>
  );
};

export default DottedButton;
