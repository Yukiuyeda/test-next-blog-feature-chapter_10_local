import React from "react";

type TextArea = {
    name: string, 
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value: string
}

export const TextArea: React.FC<TextArea> = ({ name, onChange, value }) => {
  return (
    <textarea name={name} onChange={onChange} value={value} className="w-full p-[15px] border border-gray-300 rounded-md h-[195px]"></textarea>
  );
};
