import { useState } from "react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlassAccordion() {

  const [open, setOpen] = useState(false);

  const accordionPreview = (
    <div className="w-full max-w-lg overflow-hidden rounded-[28px] border border-[#381932]/20 bg-[#381932]/20 shadow-xl backdrop-blur-3xl">

      {/* Glass Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10" />

      {/* Top */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-10 flex w-full items-center justify-between px-6 py-5"
      >

        <span className="text-sm font-semibold text-[#381932]">
          Glass Accordion
        </span>

        <span className="text-xl text-[#381932]">
          {open ? "-" : "+"}
        </span>

      </button>

      {/* Content */}
      <div
        className={`relative z-10 grid transition-all duration-300 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >

        <div className="overflow-hidden">

          <div className="border-t border-white/30 bg-white/10 px-6 py-5 backdrop-blur-3xl">

            <p className="text-sm leading-6 text-[#4c3347]">
              Modern glassmorphism accordion with realistic blur,
              transparency and layered glow effects.
            </p>

          </div>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Glass Accordion"
      description="Modern realistic glassmorphism accordion."
      preview={accordionPreview}
      code={`<div className="backdrop-blur-3xl bg-white/20"></div>`}
      fileName="GlassAccordion.jsx"
    />
  );
}