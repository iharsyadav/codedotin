// GlassAlert.jsx

import { Bell } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlassAlert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] border border-[#381932]/10 bg-[#381932]/10 p-5 shadow-xl backdrop-blur-2xl">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#381932]/10">
        <Bell size={18} className="text-[#381932]" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-[#381932]">
          Glass Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#6b5565]">
          Beautiful glassmorphism alert component.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Glass Alert"
      description="Glass style alert component."
      preview={alertPreview}
      code={`<div className="backdrop-blur-2xl"></div>`}
      fileName="GlassAlert.jsx"
    />
  );
}