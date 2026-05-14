// RotateAnimation.jsx

import { RefreshCw } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function RotateAnimation() {

  const preview = (
    <div className="flex justify-center">

      <button
        className="
          group
          flex
          items-center
          gap-3
          rounded-[24px]
          bg-white
          px-7
          py-5
          shadow-[0_10px_40px_rgba(56,25,50,0.12)]
          transition-all
          duration-300
          hover:shadow-[0_15px_50px_rgba(56,25,50,0.2)]
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#fff3e7]
          "
        >

          <RefreshCw
            size={20}
            className="
              text-[#381932]
              transition-transform
              duration-500
              group-hover:rotate-180
            "
          />

        </div>

        <div className="text-left">

          <h3 className="text-sm font-bold text-[#381932]">
            Refresh Data
          </h3>

          <p className="mt-1 text-xs text-[#6b5565]">
            Hover to rotate icon
          </p>

        </div>

      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Rotate Animation"
      description="Real usable rotate animation button."
      preview={preview}
      code={`group-hover:rotate-180`}
      fileName="RotateAnimation.jsx"
    />
  );
}