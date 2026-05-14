// BounceAnimation.jsx

import { Bell } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function BounceAnimation() {

  const preview = (
    <div className="flex justify-center">

      <button
        className="
          group
          flex
          items-center
          gap-4
          rounded-[24px]
          bg-gradient-to-r
          from-[#381932]
          to-[#6b2d5c]
          px-7
          py-5
          text-[#fff3e7]
          shadow-[0_10px_40px_rgba(56,25,50,0.25)]
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            animate-bounce
            items-center
            justify-center
            rounded-full
            bg-white/10
          "
        >

          <Bell size={20} />

        </div>

        <div className="text-left">

          <h3 className="text-sm font-bold">
            Notifications
          </h3>

          <p className="mt-1 text-xs text-[#fff3e7]/70">
            New updates available
          </p>

        </div>

      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Bounce Animation"
      description="Usable bouncing notification component."
      preview={preview}
      code={`animate-bounce`}
      fileName="BounceAnimation.jsx"
    />
  );
}