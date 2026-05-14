// SlideAnimation.jsx

import { ArrowRight } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SlideAnimation() {

  const preview = (
    <div className="flex justify-center">

      <button
        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          bg-white
          px-8
          py-6
          shadow-[0_10px_40px_rgba(56,25,50,0.12)]
        "
      >

        {/* Sliding Background */}
        <div
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-[#df1bb7]
            to-[#6b2d5c]
            transition-all
            duration-500
            group-hover:translate-x-0
          "
        />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-5">

          {/* Text */}
          <div className="text-left transition-all duration-500 group-hover:translate-x-2">

            <h3
              className="
                text-lg
                font-black
                text-[#381932]
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              Explore UI
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-[#6b5565]
                transition-colors
                duration-500
                group-hover:text-white/70
              "
            >
              Smooth sliding interaction effect
            </p>

          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#fff3e7]
              transition-all
              duration-500
              group-hover:translate-x-2
              group-hover:bg-white
            "
          >

            <ArrowRight
              size={20}
              className="text-[#381932]"
            />

          </div>

        </div>

      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Slide Animation"
      description="Modern interactive slide animation component."
      preview={preview}
      code={`group-hover:translate-x-2`}
      fileName="SlideAnimation.jsx"
    />
  );
}