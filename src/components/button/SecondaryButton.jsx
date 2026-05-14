// SecondaryButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SecondaryButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="rounded-2xl bg-white px-7 py-4 text-sm font-bold text-[#381932] shadow-lg">
        Secondary
      </button>

      <button className="rounded-full border border-[#381932]/10 bg-[#fff3e7] px-8 py-4 text-sm font-bold text-[#381932]">
        Neutral
      </button>

      <button className="rounded-2xl bg-zinc-100 px-7 py-4 text-sm font-bold text-zinc-800">
        Dashboard
      </button>

      <button className="rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-sm font-bold text-zinc-700">
        Settings
      </button>

      <button className="rounded-full bg-[#f3e5f0] px-8 py-4 text-sm font-bold text-[#381932]">
        Explore
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Secondary Buttons"
      description="Modern secondary buttons."
      preview={preview}
      code={`bg-white`}
      fileName="SecondaryButton.jsx"
    />
  );
}