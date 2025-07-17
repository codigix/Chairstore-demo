import React from "react";

export function Badge({ variant = "default", className = "", children }) {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default:
      "border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "border-transparent bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    destructive:
      "border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
