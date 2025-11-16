import React from "react";

export function Label({ children, className = "", ...props }) {
  const base = "block text-sm font-medium";
  const cls = [base, className].filter(Boolean).join(" ");
  return (
    <label className={cls} {...props}>
      {children}
    </label>
  );
}
