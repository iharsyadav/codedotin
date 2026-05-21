import { useState } from "react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Accordion() {

  const [open, setOpen] = useState(false);

  const accordionCode = `
<button className="flex w-full items-center justify-between px-6 py-5">
  <span>Accordion</span>
</button>
`;

  const accordionPreview = (
    <div className="w-full max-w-xl overflow-hidden rounded-[24px] border border-[#381932]/10 bg-white shadow-[0_10px_40px_rgba(56,25,50,0.12)]">

      {/* Top */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-7 py-6 transition-all duration-300 hover:bg-[#fff7f0]"
      >

        <span className="text-sm font-bold text-[#381932]">
          Basic Accordion style
        </span>

        <span className="text-sm font-light text-[#381932]">
          {open ? "-" : "+"}
        </span>

      </button>

      {/* Content */}
      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >

        <div className="overflow-hidden">

          <div className="border-t border-[#381932]/10 bg-[#fffaf5] px-7 py-6">

            <p className="text-sm leading-7 text-[#5c4a56]">
              Modern reusable accordion component built using
              React and Tailwind CSS with smooth animation and
              clean UI styling.
            </p>

          </div>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Accordion"
      description="Basic accordion component."
      preview={accordionPreview}
      code={accordionCode}
      fileName="Accordion.jsx"
    />
  );
}