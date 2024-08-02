import React from "react";

type ErrorMsgProps = {
   message: string | undefined
}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({ message }) => {
  return <p className="text-red-700 m-0">{message}</p>;
};
