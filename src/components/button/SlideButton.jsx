// SlideButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SlideButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="group relative overflow-hidden rounded-2xl bg-[#381932] px-7 py-4 text-sm font-bold text-white">

        <span className="relative z-10">
          Slide Hover
        </span>

        <div className="absolute inset-0 -translate-x-full bg-pink-500 transition-all duration-500 group-hover:translate-x-0" />

      </button>

      <button className="group relative overflow-hidden rounded-full bg-cyan-600 px-8 py-4 text-sm font-bold text-white">

        <span className="relative z-10">
          Dashboard
        </span>

        <div className="absolute inset-0 translate-y-full bg-blue-700 transition-all duration-500 group-hover:translate-y-0" />

      </button>

      <button className="group relative overflow-hidden rounded-2xl border border-[#381932] px-7 py-4 text-sm font-bold text-[#381932]">

        <span className="relative z-10 group-hover:text-white">
          Explore
        </span>

        <div className="absolute inset-0 -translate-x-full bg-[#381932] transition-all duration-500 group-hover:translate-x-0" />

      </button>

      <button className="group relative overflow-hidden rounded-2xl bg-orange-500 px-7 py-4 text-sm font-bold text-white">

        <span className="relative z-10">
          Fire Slide
        </span>

        <div className="absolute inset-0 translate-y-full bg-red-600 transition-all duration-500 group-hover:translate-y-0" />

      </button>

      <button className="group relative overflow-hidden rounded-full bg-violet-600 px-8 py-4 text-sm font-bold text-white">

        <span className="relative z-10">
          Studio
        </span>

        <div className="absolute inset-0 -translate-x-full bg-fuchsia-500 transition-all duration-500 group-hover:translate-x-0" />

      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Slide Buttons"
      description="Modern sliding hover buttons."
      preview={preview}
      code={`group-hover:translate-x-0`}
      fileName="SlideButton.jsx"
    />
  );
}