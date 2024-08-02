import React from "react";

type InputProps = {
    type: string,
    name: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export const Input: React.FC<InputProps> = ({ type, name, onChange, value }) => {
  return (
    <input type={type} name={name} onChange={onChange} value={value} className="w-full p-[15px] border border-gray-300 rounded-md"></input>
  );
};
