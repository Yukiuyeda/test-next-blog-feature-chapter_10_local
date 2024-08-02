import React from "react";

type LabelProps = {
  htmlFor: string;
  labelTitle: string;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, labelTitle }) => {
  return (
    <label htmlFor={htmlFor} className="w-3/12 flex items-center">
      { labelTitle }
    </label>
  );
};
