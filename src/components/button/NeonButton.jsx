// NeonButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function NeonButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5 rounded-[32px] bg-black p-10">

      <button className="rounded-2xl border border-cyan-400 bg-cyan-400/10 px-7 py-4 text-sm font-bold text-cyan-300 shadow-[0_0_30px_rgba(0,255,255,0.45)]">
        Cyber
      </button>

      <button className="rounded-full border border-pink-500 bg-pink-500/10 px-8 py-4 text-sm font-bold text-pink-300 shadow-[0_0_30px_rgba(255,0,140,0.45)]">
        Neon Pink
      </button>

      <button className="rounded-2xl border border-violet-500 bg-violet-500/10 px-7 py-4 text-sm font-bold text-violet-300 shadow-[0_0_30px_rgba(120,0,255,0.45)]">
        Glow UI
      </button>

      <button className="rounded-2xl border border-orange-400 bg-orange-400/10 px-7 py-4 text-sm font-bold text-orange-300 shadow-[0_0_30px_rgba(255,140,0,0.45)]">
        Fire Neon
      </button>

      <button className="rounded-full border border-emerald-400 bg-emerald-400/10 px-8 py-4 text-sm font-bold text-emerald-300 shadow-[0_0_30px_rgba(0,255,120,0.45)]">
        Matrix
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Neon Buttons"
      description="Cyberpunk neon buttons."
      preview={preview}
      code={`shadow-[0_0_30px_rgba()]`}
      fileName="NeonButton.jsx"
    />
  );
}