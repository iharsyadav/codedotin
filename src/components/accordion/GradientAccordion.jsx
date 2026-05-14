import { useState } from "react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GradientAccordion() {

  const [open, setOpen] = useState(false);

  const accordionCode = `
<div className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400">
  Gradient Accordion
</div>
`;

  const accordionPreview = (
    <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 shadow-xl">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5"
      >
        <span className="font-semibold text-zinc-900">
          Gradient Accordion
        </span>

        <span className="text-zinc-900">
          {open ? "-" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t border-black/10 px-6 py-5 text-zinc-800">
          Modern gradient accordion component.
        </div>
      )}

    </div>
  );

  return (
    <ComponentPreview
      title="Gradient Accordion"
      description="Modern gradient accordion component."
      preview={accordionPreview}
      code={accordionCode}
      fileName="GradientAccordion.jsx"
    />
  );
}