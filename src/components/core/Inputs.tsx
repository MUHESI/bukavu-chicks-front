import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface IpropsInputAuth {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  pl: string;
  className?: string;
}
function InputAuth({ className, value, onChange, type, pl }: IpropsInputAuth) {
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
export { InputAuth };
