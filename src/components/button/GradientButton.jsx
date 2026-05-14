// GradientButton.jsx

import { Sparkles, Rocket, Flame, Stars, Zap } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GradientButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-6">

      {/* Aurora */}
      <button
        className="
          group
          relative
          overflow-hidden
          rounded-[24px]
          p-[1px]
        "
      >

        <div
          className="
            absolute
            inset-0
            animate-pulse
            bg-gradient-to-r
            from-cyan-400
            via-fuchsia-500
            to-orange-400
          "
        />

        <div
          className="
            relative
            flex
            items-center
            gap-3
            rounded-[24px]
            bg-black
            px-8
            py-4
            text-sm
            font-bold
            text-white
          "
        >

          <Sparkles size={18} />

          Aurora

        </div>

      </button>

      {/* Liquid */}
      <button
        className="
          relative
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-pink-500
          via-orange-400
          to-yellow-300
          px-8
          py-4
          text-sm
          font-black
          text-white
          shadow-[0_10px_50px_rgba(255,120,80,0.35)]
        "
      >

        <span className="relative z-10 flex items-center gap-3">

          <Flame size={18} />

          Liquid Fire

        </span>

        <div
          className="
            absolute
            inset-0
            bg-white/20
            blur-2xl
          "
        />

      </button>

      {/* Space */}
      <button
        className="
          group
          relative
          overflow-hidden
          rounded-[26px]
          bg-[#0a0a0a]
          px-8
          py-4
          text-sm
          font-bold
          text-white
        "
      >

        <div
          className="
            absolute
            -left-10
            top-0
            h-full
            w-20
            rotate-12
            bg-gradient-to-r
            from-transparent
            via-fuchsia-500/40
            to-transparent
            transition-all
            duration-700
            group-hover:left-[120%]
          "
        />

        <span className="relative z-10 flex items-center gap-3">

          <Rocket size={18} />

          Space UI

        </span>

      </button>

      {/* Neon Mesh */}
      <button
        className="
          rounded-[26px]
          bg-[conic-gradient(at_top_left,_#ff00cc,_#3333ff,_#00ffee,_#ff00cc)]
          px-8
          py-4
          text-sm
          font-black
          text-white
          shadow-[0_0_40px_rgba(255,0,200,0.35)]
        "
      >

        <span className="flex items-center gap-3">

          <Zap size={18} />

          Neon Mesh

        </span>

      </button>

      {/* Galaxy */}
      <button
        className="
          group
          relative
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-violet-700
          via-fuchsia-600
          to-indigo-700
          px-9
          py-4
          text-sm
          font-black
          text-white
          shadow-[0_10px_50px_rgba(120,0,255,0.35)]
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.35),transparent_60%)]
          "
        />

        <span className="relative z-10 flex items-center gap-3">

          <Stars size={18} />

          Galaxy

        </span>

      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Gradient Buttons"
      description="Creative futuristic gradient buttons."
      preview={preview}
      code={`bg-[conic-gradient()]`}
      fileName="GradientButton.jsx"
    />
  );
}