// MeshBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function MeshBackground() {

  const preview = (
    <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#fff7f0]">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-300/40 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="relative z-10 rounded-[28px] bg-white/60 px-12 py-8 backdrop-blur-xl">

        <h2 className="text-4xl font-black text-[#381932]">
          Mesh UI
        </h2>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Mesh Background"
      description="Mesh gradient section."
      preview={preview}
      code={`blur-3xl`}
      fileName="MeshBackground.jsx"
    />
  );
}