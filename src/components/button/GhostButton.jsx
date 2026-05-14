// GhostButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GhostButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="rounded-2xl px-7 py-4 text-sm font-bold text-[#381932] hover:bg-[#381932]/10">
        Ghost
      </button>

      <button className="rounded-full px-8 py-4 text-sm font-bold text-pink-600 hover:bg-pink-100">
        Hover UI
      </button>

      <button className="rounded-2xl px-7 py-4 text-sm font-bold text-cyan-600 hover:bg-cyan-100">
        Explore
      </button>

      <button className="rounded-2xl px-7 py-4 text-sm font-bold text-orange-500 hover:bg-orange-100">
        Discover
      </button>

      <button className="rounded-full px-8 py-4 text-sm font-bold text-violet-600 hover:bg-violet-100">
        Studio
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Ghost Buttons"
      description="Minimal ghost style buttons."
      preview={preview}
      code={`hover:bg-[#381932]/10`}
      fileName="GhostButton.jsx"
    />
  );
}