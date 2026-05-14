// LoadingButton.jsx

import { Loader2 } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function LoadingButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="flex items-center gap-3 rounded-2xl bg-[#381932] px-7 py-4 text-sm font-bold text-white">
        <Loader2 size={18} className="animate-spin" />
        Loading
      </button>

      <button className="flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white">
        <Loader2 size={18} className="animate-spin" />
        Processing
      </button>

      <button className="flex items-center gap-3 rounded-2xl bg-zinc-900 px-7 py-4 text-sm font-bold text-white">
        <Loader2 size={18} className="animate-spin" />
        Uploading
      </button>

      <button className="flex items-center gap-3 rounded-2xl bg-pink-500 px-7 py-4 text-sm font-bold text-white">
        <Loader2 size={18} className="animate-spin" />
        Saving
      </button>

      <button className="flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-white">
        <Loader2 size={18} className="animate-spin" />
        Syncing
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Loading Buttons"
      description="Buttons with loading states."
      preview={preview}
      code={`animate-spin`}
      fileName="LoadingButton.jsx"
    />
  );
}