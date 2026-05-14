// GlowBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlowBackground() {

  const preview = (
    <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#140814]">

      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-orange-400/30 blur-3xl" />

      <div className="relative z-10 rounded-[28px] bg-white/10 px-12 py-8 backdrop-blur-xl">

        <h2 className="text-4xl font-black text-white">
          Glow Landing
        </h2>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Glow Background"
      description="Landing section with glow background."
      preview={preview}
      code={`blur-3xl`}
      fileName="GlowBackground.jsx"
    />
  );
}