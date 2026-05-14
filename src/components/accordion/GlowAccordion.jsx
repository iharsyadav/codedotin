import { useState } from "react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlowAccordion() {

  const [open, setOpen] = useState(false);

  const accordionPreview = (
    <div className="w-full max-w-lg overflow-hidden rounded-[24px] bg-[#381932] shadow-[0_0_40px_rgba(56,25,50,0.35)]">

      {/* Top */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 transition-all duration-300 hover:bg-[#4a2142]"
      >

        <span className="text-sm font-semibold text-[#fff3e7]">
          Glow Accordion
        </span>

        <span className="text-lg text-[#fff3e7]">
          {open ? "-" : "+"}
        </span>

      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >

        <div className="overflow-hidden">

          <div className="border-t border-white/10 bg-[#4a2142] px-5 py-4">

            <p className="text-sm leading-6 text-[#fff3e7]/70">
              Modern glowing accordion component with premium dark UI.
            </p>

          </div>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Glow Accordion"
      description="Glow effect accordion style."
      preview={accordionPreview}
      code={`<div className="bg-[#381932] shadow-[0_0_40px_rgba(56,25,50,0.35)]"></div>`}
      fileName="GlowAccordion.jsx"
    />
  );
}