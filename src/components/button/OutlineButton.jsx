// OutlineButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function OutlineButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="rounded-2xl border-2 border-[#381932] px-7 py-4 text-sm font-bold text-[#381932]">
        Outline
      </button>

      <button className="rounded-full border-2 border-pink-500 px-8 py-4 text-sm font-bold text-pink-500">
        Modern
      </button>

      <button className="rounded-2xl border-2 border-cyan-500 px-7 py-4 text-sm font-bold text-cyan-600">
        Dashboard
      </button>

      <button className="rounded-2xl border-2 border-orange-400 px-7 py-4 text-sm font-bold text-orange-500">
        Explore
      </button>

      <button className="rounded-full border-2 border-violet-500 px-8 py-4 text-sm font-bold text-violet-600">
        Premium
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Outline Buttons"
      description="Clean outline button styles."
      preview={preview}
      code={`border-2`}
      fileName="OutlineButton.jsx"
    />
  );
}