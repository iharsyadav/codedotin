// Badge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Badge() {

  const preview = (
    <div className="flex justify-center">

      <div className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#381932] shadow-[0_10px_40px_rgba(56,25,50,0.12)]">
        Default Badge
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Badge"
      description="Basic badge component."
      preview={preview}
      code={`<div className="rounded-full bg-white"></div>`}
      fileName="Badge.jsx"
    />
  );
}