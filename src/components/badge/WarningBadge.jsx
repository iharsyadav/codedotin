// WarningBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function WarningBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
        Warning
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Warning Badge"
      description="Warning state badge."
      preview={preview}
      code={`bg-amber-100`}
      fileName="WarningBadge.jsx"
    />
  );
}