// TestButton.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";
import { Plus } from "lucide-react";

export default function TestButton() {
  const buttonCode = `
<button
  className="
    relative
    overflow-hidden
    rounded-full
    border
    border-white/20
    bg-gradient-to-r
    from-[#4d00ff]
    via-[#a020f0]
    to-[#f4d8ff]
    px-8
    py-3
    text-sm
    font-semibold
    text-white
    shadow-[0_0_30px_rgba(140,0,255,0.35)]
    transition-all
    duration-300
    hover:scale-105
  "
>
  Get Started
</button>
`;

  const buttonPreview = (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="rounded-full bg-black p-2 shadow-[0_0_40px_rgba(140,0,255,0.35)]">
          <button
            className="
            relative
            overflow-hidden
            rounded-full
            border
            border-white/20
            bg-gradient-to-r
            from-[#4d00ff]
            via-[#a020f0]
            to-[#f4d8ff]
            px-8
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[inset_0_0_20px_rgba(255,255,255,0.25)]
            transition-all
            duration-300
            hover:scale-105
          "
          >
            {/* Glow */}
            <div
              className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),transparent_60%)]
              blur-xl
            "
            />

            <span className="relative z-10">Get Started</span>
          </button>
        </div>
        <button class="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          click Me
        </button>
        <button
      className="
        group
        relative
        flex
        h-12
        w-40
        cursor-pointer
        items-center
        overflow-hidden
        rounded-xl
        border
        border-emerald-500
        bg-emerald-500
        shadow-[0_10px_30px_rgba(16,185,129,0.35)]
      "
    >

      <span
        className="
          ml-5
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          group-hover:translate-x-20
          group-hover:opacity-0
        "
      >
        Add Item
      </span>

      <span
        className="
          absolute
          right-0
          flex
          h-full
          w-12
          items-center
          justify-center
          rounded-xl
          bg-emerald-600
          transition-all
          duration-300
          group-hover:w-full
        "
      >

        <Plus size={22} className="text-white" />

      </span>

    </button>
    <button
  className="group relative flex h-12 w-12 items-center justify-start gap-2 overflow-hidden rounded bg-sky-700 p-2 pr-6 font-bold text-neutral-50 duration-700 hover:w-44 hover:bg-sky-600 before:absolute before:left-8 before:-z-10 before:h-6 before:w-6 before:rotate-45 before:bg-sky-700 before:duration-700 hover:before:left-40 hover:before:bg-sky-600"
>
  {/* LinkedIn Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="h-8 w-8 shrink-0 fill-neutral-50"
  >
    <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z" />
  </svg>

  {/* Text */}
  <span
    className="origin-left scale-x-0 border-l-2 px-1 opacity-0 transition-all duration-100 group-hover:scale-x-100 group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300"
  >
    Your Name
  </span>
</button>
      </div>
    </>
  );

  return (
    <ComponentPreview
      title="TestButton"
      description="Modern futuristic glowing button."
      preview={buttonPreview}
      code={buttonCode}
      fileName="TestButton.jsx"
    />
  );
}
