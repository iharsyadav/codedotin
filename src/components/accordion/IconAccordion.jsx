import { useState } from "react";

import { ChevronDown } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function IconAccordion() {
  const [open, setOpen] = useState(false);

  const accordionCode = `
import { ChevronDown } from "lucide-react";
<div className="w-full max-w-lg overflow-hidden rounded-[28px] border border-[#381932]/10 bg-white shadow-[0_10px_40px_rgba(56,25,50,0.12)]">
  <button
    onClick={() => setOpen(!open)}
    className="flex w-full items-center justify-between px-6 py-5 transition-all duration-300 hover:bg-[#fff7f0]"
  >
    <div>
      <h3 className="text-base font-bold text-[#381932]">
        Icon Accordion
      </h3>
    </div>

    <div
      className={\`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-[#fff3e7]
        transition-all
        duration-300
        \${open ? "rotate-180 bg-[#381932]" : ""}
      \`}
    >
      <ChevronDown
        size={18}
        className={\`
          transition-all
          duration-300
          \${open ? "text-white" : "text-[#381932]"}
        \`}
      />
    </div>
  </button>
</div>
`;

  const accordionPreview = (
    <div className="w-full max-w-lg overflow-hidden rounded-[28px] border border-[#381932]/10 bg-white shadow-[0_10px_40px_rgba(56,25,50,0.12)]">
      {/* Top */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 transition-all duration-300 hover:bg-[#fff7f0]"
      >
        {/* Left */}
        <div>
          <h3 className="text-base font-bold text-[#381932]">Icon Accordion</h3>
        </div>
        {/* Icon */}
        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#fff3e7]
            transition-all
            duration-300
            ${open ? "rotate-180 bg-[#381932]" : ""}
          `}
        >
          <ChevronDown
            size={18}
            className={`
              transition-all
              duration-300
              ${open ? "text-white" : "text-[#381932]"}
            `}
          />
        </div>
      </button>

      {/* Content */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#381932]/10 bg-[#fffaf5] px-6 py-5">
            <p className="text-sm leading-7 text-[#5c4a56]">
              Beautiful icon accordion with smooth rotation animation, modern
              card styling and premium UI interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ComponentPreview
      title="Icon Accordion"
      description="Accordion with animated icon."
      preview={accordionPreview}
      code={accordionCode}
      fileName="IconAccordion.jsx"
    />
  );
}
