// GradientAlert.jsx

import { Sparkles } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GradientAlert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] bg-gradient-to-r from-[#381932] to-[#6b2d5c] p-5 shadow-[0_10px_40px_rgba(56,25,50,0.25)]">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
        <Sparkles size={18} className="text-[#fff3e7]" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-[#fff3e7]">
          Gradient Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#fff3e7]/70">
          Premium gradient alert component with modern UI.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Gradient Alert"
      description="Gradient alert component."
      preview={alertPreview}
      code={`<div className="bg-gradient-to-r"></div>`}
      fileName="GradientAlert.jsx"
    />
  );
}