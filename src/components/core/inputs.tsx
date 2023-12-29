import React from "react";
import { Input } from "../ui/input";
import HoverCardCustom from "./HoverCardCustom";
import { BsQuestionCircle } from "react-icons/bs";

// AUTH
interface IpropsInputAuth {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  pl: string;
  // autoComplete?: "off" | "on";
}
export function InputAuth({ value, onChange, type, pl }: IpropsInputAuth) {
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={pl}
      className="outline-none text-sm flex-1 focus:outline-none bg-gray-100"
    />
  );
}

interface DataCustomSelectFieldProps_<TData, TkeyObject extends keyof TData> {
  value: string | number;
  // onChange: () => void;
  typeByDefault: TData;
  DataCustomSelectFieldProps: string;
  data: TData[];
  keyObject: TkeyObject;
}
interface DataCustomSelectFieldProps {
  value: string | number;
  // onChange: () => any;
  typeByDefault: { label: string };
  // data: {_id: string  }extends TData[];
  label: string;
  data: any[];
  keyObject: string;
}
function InputCommon({
  pl,
  label,
  onChange,
  value,
  type,
  required,
  disabled,
  autoComplete,
}: {
  label: string;
  pl?: string;
  type?: "number" | "string" | "date";
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: "off" | "on";
}) {
  return (
    <div className="flex-auto p-0 m-0">
      <label className="text-sm">
        {label}
        <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
      </label>
      <Input
        autoComplete={"off" || autoComplete}
        disabled={disabled ? disabled : false}
        onChange={onChange}
        placeholder={pl}
        value={value}
        type={type || "text"}
        className=" rounded-md "
      />
    </div>
  );
}

function CommonInputGap({
  pl,
  min,
  max,

  label,
  titleTooltip,
  onChange,
  value,
  type,
  required,
  disabled,
  classNameHoverCard,
  autoComplete,
}: {
  classNameHoverCard?: string;
  titleTooltip?: string;
  label: string;
  pl?: string;
  type?: "number" | "string" | "date" | "time" | "password";
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  autoComplete?: "off" | "on";
}) {
  return (
    <div className="flex-auto p-0 m-0 mb-2">
      <label className=" flex items-center gap-3 text-sm">
        <span className="">
          {label}
          <span className="text-red-500"> {`${required ? "*" : ""}`} </span>
        </span>
        {titleTooltip && (
          <HoverCardCustom
            description={titleTooltip}
            className={classNameHoverCard}
          >
            <BsQuestionCircle />
          </HoverCardCustom>
        )}
      </label>
      <Input
        autoComplete={autoComplete}
        min={min}
        max={max}
        disabled={disabled ? disabled : false}
        onChange={onChange}
        placeholder={pl}
        value={value}
        type={type || "text"}
        className=" rounded-md "
      />
    </div>
  );
}

export { InputCommon, CommonInputGap };
