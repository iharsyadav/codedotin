// AnimatedButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function AnimatedButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="rounded-2xl bg-[#381932] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        Hover Lift
      </button>

      <button className="rounded-full bg-pink-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:rotate-3">
        Rotate
      </button>

      <button className="rounded-2xl bg-cyan-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:tracking-widest">
        Expand
      </button>

      <button className="rounded-2xl bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,0,0.45)]">
        Glow
      </button>

      <button className="rounded-full bg-violet-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-110">
        Animate
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Animated Buttons"
      description="Interactive animated buttons."
      preview={preview}
      code={`transition-all duration-300`}
      fileName="AnimatedButton.jsx"
    />
  );
}