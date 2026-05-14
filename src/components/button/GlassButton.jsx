// GlassButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlassButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5 rounded-[32px] bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500 p-10">

      <button className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl">
        Glass
      </button>

      <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-2xl">
        Premium
      </button>

      <button className="rounded-2xl bg-[#ffffff15] px-7 py-4 text-sm font-bold text-white backdrop-blur-[30px]">
        Dashboard
      </button>

      <button className="rounded-2xl border border-blue-400/40 bg-[#a63d82]/20 px-7 py-4 text-sm font-bold text-white backdrop-blur-[40px]">
        Neon Glass
      </button>

      <button className="rounded-full border border-white/10 bg-black/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-[50px]">
        Blur UI
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Glass Buttons"
      description="Modern glassmorphism buttons."
      preview={preview}
      code={`backdrop-blur-xl`}
      fileName="GlassButton.jsx"
    />
  );
}