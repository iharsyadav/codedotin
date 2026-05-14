// TagBadge.jsx

import { Hash } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function TagBadge() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-4">

      <div className="flex items-center gap-2 rounded-full border border-[#381932]/10 bg-white px-5 py-2 text-sm font-semibold text-[#381932] shadow-[0_10px_40px_rgba(56,25,50,0.12)]">

        <Hash size={16} />

        React

      </div>

      <div className="flex items-center gap-2 rounded-full bg-[#fff3e7] px-5 py-2 text-sm font-semibold text-[#381932]">

        <Hash size={16} />

        Tailwind

      </div>

      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#381932] to-[#6b2d5c] px-5 py-2 text-sm font-semibold text-[#fff3e7] shadow-xl">

        <Hash size={16} />

        UI Design

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Tag Badge"
      description="Modern tag style badges."
      preview={preview}
      code={`<Hash size={16} />`}
      fileName="TagBadge.jsx"
    />
  );
}