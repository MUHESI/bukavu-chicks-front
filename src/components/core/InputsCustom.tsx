import React from "react";
import { cn } from "@/lib/utils";

interface IpropsInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "password" | "email" | "number";
  pl: string;
  className?: string;
}
export function InputAuth({ className, value, onChange, type, pl }: IpropsInput) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={pl}
      className={cn("outline-none text-sm flex-1 focus:outline-none bg-gray-100", className)}
    />
  );
}
