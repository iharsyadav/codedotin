// StatusBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function StatusBadge() {

  const preview = (
    <div className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg">

      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

      <span className="text-sm font-semibold text-[#381932]">
        Online
      </span>

    </div>
  );

  return (
    <ComponentPreview
      title="Status Badge"
      description="Status indicator badge."
      preview={preview}
      code={`bg-green-500`}
      fileName="StatusBadge.jsx"
    />
  );
}