import React from "react";

export function Button({ children, className = "", ...props }){
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium";
  const cls = [base, className].filter(Boolean).join(" ");
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
