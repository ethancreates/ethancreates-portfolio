import { cn } from "@/lib/utils";

type MainButtonProps = {
  children: React.ReactNode;

  className?: string;
};

const MainButton = ({ children, className }: MainButtonProps) => {
  return (
    <button
      className={cn(
        className,
        "rounded-md border border-white/55 bg-slate-900 px-6 font-light uppercase h-12  text-white transition-all duration-300  hover:rounded-2xl  active:translate-x-[0px] active:translate-y-[0px] active:rounded-full active:shadow-none",
      )}
    >
      {children}
    </button>
  );
};

export default MainButton;
