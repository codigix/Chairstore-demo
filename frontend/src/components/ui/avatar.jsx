import React from "react";

export function Avatar({ src, alt, fallback, className = "" }) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt || "Avatar"}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-gray-600">
          {fallback || "?"}
        </div>
      )}
    </div>
  );
}
