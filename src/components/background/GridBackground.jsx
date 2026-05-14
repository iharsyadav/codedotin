// GridBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GridBackground() {

  const preview = (
    <div
      className="
        flex
        h-72
        w-full
        items-center
        justify-center
        rounded-[28px]
        bg-white
        bg-[linear-gradient(to_right,#38193210_1px,transparent_1px),linear-gradient(to_bottom,#38193210_1px,transparent_1px)]
        bg-[size:40px_40px]
      "
    >

      <div className="rounded-[24px] bg-white px-10 py-7 shadow-xl">

        <h3 className="text-3xl font-black text-[#381932]">
          Dashboard Grid
        </h3>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Grid Background"
      description="Grid dashboard background."
      preview={preview}
      code={`bg-[size:40px_40px]`}
      fileName="GridBackground.jsx"
    />
  );
}