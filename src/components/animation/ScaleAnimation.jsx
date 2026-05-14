// ScaleAnimation.jsx

import { ShoppingBag } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function ScaleAnimation() {

  const preview = (
    <div className="flex justify-center">

      <div
        className="
          group
          flex
          items-center
          gap-5
          rounded-[28px]
          border
          border-[#381932]/10
          bg-white
          px-8
          py-6
          shadow-[0_10px_40px_rgba(56,25,50,0.12)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_20px_60px_rgba(56,25,50,0.2)]
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
            rounded-2xl
            bg-[#fff3e7]
            transition-all
            duration-300
            group-hover:scale-110
          "
        >

          <ShoppingBag
            size={22}
            className="text-[#381932]"
          />

        </div>

        {/* Content */}
        <div className="text-left">

          <h3 className="text-lg font-black text-[#381932]">
            Scale Card
          </h3>

          <p className="mt-1 text-sm text-[#6b5565]">
            Smooth interactive hover scaling effect
          </p>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Scale Animation"
      description="Modern usable hover scale animation."
      preview={preview}
      code={`hover:scale-105`}
      fileName="ScaleAnimation.jsx"
    />
  );
}