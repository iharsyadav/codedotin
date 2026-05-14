// GlowAnimation.jsx

import { Sparkles } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlowAnimation() {

  const preview = (
    <div className="flex justify-center">

      <button
        className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          bg-gradient-to-r
          from-[#ffb86b]
          via-[#ff8a5c]
          to-[#ff6b81]
          p-[1px]
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_0_60px_rgba(255,140,90,0.45)]
        "
      >

        {/* Inner */}
        <div
          className="
            flex
            items-center
            gap-5
            rounded-[30px]
            bg-[#2a1024]
            px-8
            py-6
          "
        >

          {/* Icon */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#ffb86b]
              to-[#ff6b81]
              shadow-[0_0_30px_rgba(255,140,90,0.45)]
              transition-all
              duration-500
              group-hover:rotate-12
              group-hover:scale-110
            "
          >

            <Sparkles
              size={22}
              className="text-white"
            />

          </div>

          {/* Content */}
          <div className="text-left">

            <h3 className="text-lg font-black text-white">
              Premium Glow
            </h3>

            <p className="mt-1 text-sm text-white/70">
              Interactive glowing UI component
            </p>

          </div>

        </div>

      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Glow Animation"
      description="Premium glowing interactive animation component."
      preview={preview}
      code={`hover:shadow-[0_0_60px_rgba(255,140,90,0.45)]`}
      fileName="GlowAnimation.jsx"
    />
  );
}