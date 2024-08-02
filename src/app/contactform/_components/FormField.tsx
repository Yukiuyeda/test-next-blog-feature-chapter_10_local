import React, { ReactNode } from "react";

type FormFieldProps = {
  children: ReactNode;
};

export const FormField = ({ children }: FormFieldProps) => {
  return <div className="flex mb-6">{children}</div>;
};
