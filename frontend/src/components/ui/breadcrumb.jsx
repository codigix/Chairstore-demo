import React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

// ✅ Breadcrumb Container
export function Breadcrumb({ children, className = "", ...props }) {
  return (
    <nav
      aria-label="breadcrumb"
      className={`text-sm text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </nav>
  );
}

// ✅ Breadcrumb List
export function BreadcrumbList({ children, className = "", ...props }) {
  return (
    <ol
      className={`flex flex-wrap items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </ol>
  );
}

// ✅ Breadcrumb Item
export function BreadcrumbItem({ children, className = "", ...props }) {
  return (
    <li className={`inline-flex items-center gap-1.5 ${className}`} {...props}>
      {children}
    </li>
  );
}

// ✅ Breadcrumb Link
export function BreadcrumbLink({ children, className = "", ...props }) {
  return (
    <a
      className={`transition-colors hover:text-black ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

// ✅ Breadcrumb Page (current page)
export function BreadcrumbPage({ children, className = "", ...props }) {
  return (
    <span
      aria-current="page"
      className={`font-medium text-black ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

// ✅ Breadcrumb Separator
export function BreadcrumbSeparator({ children, className = "", ...props }) {
  return (
    <li
      aria-hidden="true"
      className={`flex items-center ${className}`}
      {...props}
    >
      {children || <ChevronRight className="w-4 h-4" />}
    </li>
  );
}

// ✅ Breadcrumb Ellipsis (for truncation)
export function BreadcrumbEllipsis({ className = "", ...props }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-6 w-6 items-center justify-center ${className}`}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
