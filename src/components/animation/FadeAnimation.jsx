// FadeAnimation.jsx

import { Wifi } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function FadeAnimation() {

  const preview = (
    <div className="flex justify-center">

      <div
        className="
          flex
          items-center
          gap-4
          rounded-[24px]
          bg-white
          px-7
          py-5
          shadow-[0_10px_40px_rgba(56,25,50,0.12)]
        "
      >

        <div
          className="
            flex
            h-12
            w-12
            animate-pulse
            items-center
            justify-center
            rounded-full
            bg-[#fff3e7]
          "
        >

          <Wifi size={20} className="text-[#381932]" />

        </div>

        <div>

          <h3 className="text-sm font-bold text-[#381932]">
            Connecting...
          </h3>

          <p className="mt-1 text-xs text-[#6b5565]">
            Waiting for network response
          </p>

        </div>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Fade Animation"
      description="Usable pulse fade animation component."
      preview={preview}
      code={`animate-pulse`}
      fileName="FadeAnimation.jsx"
    />
  );
}