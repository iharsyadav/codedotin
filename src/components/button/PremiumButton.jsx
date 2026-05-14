// PremiumButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function PremiumButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-6">

      <button className="rounded-[22px] bg-gradient-to-r from-[#381932] to-[#6b2d5c] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(56,25,50,0.35)] transition-all duration-300 hover:scale-105">
        Premium Access
      </button>

      <button className="rounded-full border border-yellow-300/30 bg-[#1a1a1a] px-8 py-4 text-sm font-bold text-yellow-200 shadow-[0_0_40px_rgba(255,220,120,0.15)]">
        Gold Plan
      </button>

      <button className="rounded-[22px] bg-black px-8 py-4 text-sm font-bold text-white shadow-[0_0_50px_rgba(255,255,255,0.08)]">
        Elite UI
      </button>

      <button className="rounded-[22px] border border-white/20 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 text-sm font-bold text-white shadow-xl">
        Creator Pro
      </button>

      <button className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(255,120,80,0.35)]">
        Upgrade Now
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Premium Buttons"
      description="Production premium modern buttons."
      preview={preview}
      code={`shadow-[0_10px_40px_rgba()]`}
      fileName="PremiumButton.jsx"
    />
  );
}