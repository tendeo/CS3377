import React from "react";

export function Input({ className = "", ...props }) {
  const base = "w-full bg-transparent py-2 placeholder:opacity-60";
  const cls = [base, className].filter(Boolean).join(" ");
  return <input className={cls} {...props} />;
}
