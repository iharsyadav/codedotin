// GradientBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GradientBackground() {

  const preview = (
    <div className="flex h-72 w-full items-center justify-center rounded-[28px] bg-gradient-to-br from-[#381932] via-[#6b2d5c] to-[#d0a16f]">

      <div className="text-center text-white">

        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          CODEDOTIN UI
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Gradient Hero
        </h2>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Gradient Background"
      description="Hero section with gradient background."
      preview={preview}
      code={`bg-gradient-to-br`}
      fileName="GradientBackground.jsx"
    />
  );
}