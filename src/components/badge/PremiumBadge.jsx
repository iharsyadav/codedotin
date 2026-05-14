// PremiumBadge.jsx

import { Crown } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function PremiumBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#381932] to-[#6b2d5c] px-5 py-2 text-sm font-semibold text-[#fff3e7] shadow-xl">

        <Crown size={16} />

        Premium

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Premium Badge"
      description="Premium badge component."
      preview={preview}
      code={`bg-gradient-to-r`}
      fileName="PremiumBadge.jsx"
    />
  );
}