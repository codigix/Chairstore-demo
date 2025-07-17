import React from "react";

export function Alert({ variant = "default", children, className = "" }) {
  const baseClasses =
    "relative w-full rounded-lg border p-4 flex items-start";
  const variants = {
    default: "bg-white text-gray-800 border-gray-200",
    destructive: "bg-red-50 text-red-600 border-red-300",
  };

  return (
    <div
      role="alert"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ children, className = "" }) {
  return (
    <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>
      {children}
    </h5>
  );
}

export function AlertDescription({ children, className = "" }) {
  return (
    <div className={`text-sm leading-relaxed ${className}`}>{children}</div>
  );
}
