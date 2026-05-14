// SaleBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SaleBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-5 py-2 text-sm font-bold text-white shadow-xl">
        50% OFF
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Sale Badge"
      description="Sale discount badge."
      preview={preview}
      code={`from-orange-400 to-pink-500`}
      fileName="SaleBadge.jsx"
    />
  );
}