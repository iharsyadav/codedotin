// FloatAnimation.jsx

import { Cloud } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function FloatAnimation() {

  const preview = (
    <div className="flex justify-center">

      <div
        className="
          relative
          animate-bounce
          rounded-[30px]
          bg-gradient-to-br
          from-[#381932]
          to-[#6b2d5c]
          px-8
          py-7
          text-white
          shadow-[0_20px_60px_rgba(56,25,50,0.35)]
        "
      >

        {/* Floating Glow */}
        <div
          className="
            absolute
            -top-6
            -right-6
            h-24
            w-24
            rounded-full
            bg-[#ffb86b]/20
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-5">

          {/* Icon */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              backdrop-blur-xl
            "
          >

            <Cloud size={24} />

          </div>

          {/* Text */}
          <div>

            <h3 className="text-lg font-black">
              Floating Cloud
            </h3>

            <p className="mt-1 text-sm text-white/70">
              Soft floating animation effect
            </p>

          </div>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Float Animation"
      description="Modern floating animation component."
      preview={preview}
      code={`animate-bounce`}
      fileName="FloatAnimation.jsx"
    />
  );
}