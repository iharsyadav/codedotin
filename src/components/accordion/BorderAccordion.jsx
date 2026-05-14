import { useState } from "react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function BorderAccordion() {

  const [open, setOpen] = useState(false);

  const accordionPreview = (
    <div className="w-full max-w-lg overflow-hidden rounded-[24px] border border-[#381932]/20 bg-[#381932] shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 transition-all duration-300 hover:bg-[#5a5959]"
      >

        <span className="text-sm font-semibold text-[#ffffff]">
          Border Accordion
        </span>

        <span className="text-lg text-[#000000]">
          {open ? "-" : "+"}
        </span>

      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >

        <div className="overflow-hidden">

          <div className="border-t border-[#381932]/10 bg-[#fff7f0] px-5 py-4">

            <p className="text-sm leading-6 text-[#5c4a56]">
              Clean bordered accordion style with soft milk background.
            </p>

          </div>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Border Accordion"
      description="Border based accordion design."
      preview={accordionPreview}
      code={`<div className="border border-[#381932]/20"></div>`}
      fileName="BorderAccordion.jsx"
    />
  );
}