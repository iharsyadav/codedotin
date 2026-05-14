// InfoBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function InfoBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Info
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Info Badge"
      description="Information badge."
      preview={preview}
      code={`bg-blue-100`}
      fileName="InfoBadge.jsx"
    />
  );
}