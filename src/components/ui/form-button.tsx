"use client";

import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useToast } from "./use-toast";

export default function FormButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button className={className}>
      {pending ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
}
