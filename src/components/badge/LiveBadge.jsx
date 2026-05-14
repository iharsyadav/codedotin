// LiveBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function LiveBadge() {

  const preview = (
    <div className="flex items-center justify-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">

      <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-600" />

      LIVE

    </div>
  );

  return (
    <ComponentPreview
      title="Live Badge"
      description="Live status badge."
      preview={preview}
      code={`animate-pulse`}
      fileName="LiveBadge.jsx"
    />
  );
}