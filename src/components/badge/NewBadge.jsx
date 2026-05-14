// NewBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function NewBadge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-[#381932] px-5 py-2 text-sm font-semibold text-[#fff3e7]">
        NEW
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="New Badge"
      description="New badge component."
      preview={preview}
      code={`bg-[#381932]`}
      fileName="NewBadge.jsx"
    />
  );
}