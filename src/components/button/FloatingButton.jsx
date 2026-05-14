// FloatingButton.jsx

import { Plus, MessageCircle, ShoppingBag, Bell, Sparkles } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function FloatingButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-6">

      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#381932] text-white shadow-[0_10px_40px_rgba(56,25,50,0.35)]">
        <Plus size={24} />
      </button>

      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-white shadow-[0_10px_40px_rgba(255,0,140,0.35)]">
        <MessageCircle size={24} />
      </button>

      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white shadow-[0_10px_40px_rgba(0,255,255,0.35)]">
        <ShoppingBag size={24} />
      </button>

      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_10px_40px_rgba(255,140,0,0.35)]">
        <Bell size={24} />
      </button>

      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_10px_40px_rgba(120,0,255,0.35)]">
        <Sparkles size={24} />
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Floating Buttons"
      description="Modern floating action buttons."
      preview={preview}
      code={`rounded-full`}
      fileName="FloatingButton.jsx"
    />
  );
}