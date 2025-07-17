import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ children }) {
  return <div className="border rounded-md">{children}</div>;
}

export function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 px-2 font-medium hover:underline"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="pb-4 px-2 text-sm">{children}</div>}
    </div>
  );
}
