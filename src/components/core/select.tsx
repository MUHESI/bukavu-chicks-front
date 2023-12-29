import React from "react";
export interface IPropsCustomSelectField<TData> {
  data: TData[];
  keyObject: keyof TData;
  disabled?: boolean;
  value: string | number;
  onChange: (e: any) => void;
  typeByDefault?: { label: string; value: number | string } | null;
  className?: string;
}
function CustomSelectField<TData>({
  disabled,
  value,
  data,
  keyObject,
  onChange,
  className,
}: any) {
  return (
    <select
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled ? disabled : false}
      className={`flex border border-slate-300 w-full ring-offset-background file:border-0 placeholder:text-muted-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 px-3 text-[14px] text-gray-400 rounded h-[30px] ${className}`}
    >
      <option value={""} className="">
        Chosir
      </option>

      {data?.map((item: any, key: number) => (
        <option
          key={key}
          value={item.id}
          className="m-0 p-0  "
        >{` ${item[keyObject]}`}</option>
      ))}
    </select>
  );
}
function SelectCommon<TData>({
  onChange,
  value,
  disabled,
  label,
  required,
  data,
  keyObject,
  className,
  typeByDefault,
}: {
  className?: string;
  label: string;
  data: TData[];
  value: string | number;
  pl?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  keyObject: keyof TData;
  onChange: (e: any) => void;
  typeByDefault?: { label: string; value: number | string } | null;
}) {
  return (
    <div className="flex-auto 0 m-0">
      <label className="text-sm m-0">
        {label}
        <span className="text-red-500 m-0"> {`${required ? "*" : ""}`} </span>
      </label>
      <CustomSelectField
        className={className}
        disabled={disabled}
        keyObject={keyObject}
        value={value}
        data={data}
        onChange={onChange}
        defaultValue={typeByDefault}
      />
    </div>
  );
}


export { SelectCommon };
