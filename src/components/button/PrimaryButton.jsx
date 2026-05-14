// PrimaryButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function PrimaryButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="rounded-2xl bg-[#381932] px-7 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105">
        Get Started
      </button>

      <button className="rounded-2xl bg-[#4d2245] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#381932]">
        Continue
      </button>

      <button className="rounded-full bg-[#381932] px-8 py-4 text-sm font-bold text-white shadow-lg">
        Explore
      </button>

      <button className="rounded-2xl border border-[#381932] bg-white px-7 py-4 text-sm font-bold text-[#381932] hover:bg-[#381932] hover:text-white transition-all duration-300">
        Learn More
      </button>

      <button className="rounded-2xl bg-[#381932] px-7 py-4 text-sm font-bold text-white shadow-[0_0_30px_rgba(56,25,50,0.35)]">
        Premium
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Primary Buttons"
      description="Modern production ready primary buttons."
      preview={preview}
      code={`bg-[#381932]`}
      fileName="PrimaryButton.jsx"
    />
  );
}