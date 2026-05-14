// DotBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function DotBackground() {

  const preview = (
    <div
      className="
        flex
        h-72
        w-full
        items-center
        justify-center
        rounded-[28px]
        bg-[#fffaf5]
        bg-[radial-gradient(#38193220_1px,transparent_1px)]
        bg-[size:18px_18px]
      "
    >

      <div className="rounded-[24px] border border-[#381932]/10 bg-white px-10 py-7 shadow-lg">

        <h3 className="text-3xl font-black text-[#381932]">
          Dot Pattern
        </h3>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Dot Background"
      description="Dot pattern hero section."
      preview={preview}
      code={`bg-[radial-gradient()]`}
      fileName="DotBackground.jsx"
    />
  );
}