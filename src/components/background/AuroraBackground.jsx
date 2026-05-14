// AuroraBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function AuroraBackground() {

  const preview = (
    <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#07010d]">

      <div className="absolute left-10 top-10 h-60 w-60 animate-pulse rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute right-10 top-20 h-60 w-60 animate-pulse rounded-full bg-pink-400/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 animate-pulse rounded-full bg-purple-400/20 blur-3xl" />

      <div className="relative z-10 text-center text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          AURORA
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Future UI
        </h2>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Aurora Background"
      description="Aurora glowing hero background."
      preview={preview}
      code={`blur-3xl`}
      fileName="AuroraBackground.jsx"
    />
  );
}