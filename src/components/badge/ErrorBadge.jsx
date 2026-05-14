// ErrorBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function ErrorBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
        Error
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Error Badge"
      description="Error state badge."
      preview={preview}
      code={`bg-red-100`}
      fileName="ErrorBadge.jsx"
    />
  );
}