// VerifiedBadge.jsx

import { BadgeCheck } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function VerifiedBadge() {

  const preview = (
    <div className="flex items-center justify-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

      <BadgeCheck size={16} />

      Verified

    </div>
  );

  return (
    <ComponentPreview
      title="Verified Badge"
      description="Verified account badge."
      preview={preview}
      code={`<BadgeCheck />`}
      fileName="VerifiedBadge.jsx"
    />
  );
}