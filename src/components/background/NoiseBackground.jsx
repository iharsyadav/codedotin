// NoiseBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function NoiseBackground() {

  const preview = (
    <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#381932]">

      <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 text-center text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          NOISE EFFECT
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Textured UI
        </h2>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Noise Background"
      description="Noise textured landing section."
      preview={preview}
      code={`mix-blend-soft-light`}
      fileName="NoiseBackground.jsx"
    />
  );
}