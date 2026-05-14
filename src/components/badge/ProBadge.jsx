// ProBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function ProBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full border border-[#381932]/10 bg-white px-5 py-2 text-sm font-bold text-[#381932] shadow-lg">
        PRO
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Pro Badge"
      description="Professional badge component."
      preview={preview}
      code={`shadow-lg`}
      fileName="ProBadge.jsx"
    />
  );
}