// SuccessBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SuccessBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
        Success
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Success Badge"
      description="Success state badge."
      preview={preview}
      code={`bg-green-100`}
      fileName="SuccessBadge.jsx"
    />
  );
}