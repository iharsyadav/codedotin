// IconButton.jsx

import { ArrowRight, Heart, Download, Plus, ShoppingBag } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function IconButton() {

  const preview = (
    <div className="flex flex-wrap justify-center gap-5">

      <button className="flex items-center gap-3 rounded-2xl bg-[#381932] px-7 py-4 text-sm font-bold text-white">
        Shop Now
        <ShoppingBag size={18} />
      </button>

      <button className="flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-sm font-bold text-white">
        Wishlist
        <Heart size={18} />
      </button>

      <button className="flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white">
        Download
        <Download size={18} />
      </button>

      <button className="flex items-center gap-3 rounded-2xl border border-[#381932] bg-white px-7 py-4 text-sm font-bold text-[#381932]">
        Create
        <Plus size={18} />
      </button>

      <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 text-sm font-bold text-white">
        Explore
        <ArrowRight size={18} />
      </button>

    </div>
  );

  return (
    <ComponentPreview
      title="Icon Buttons"
      description="Modern buttons with icons."
      preview={preview}
      code={`<ArrowRight size={18} />`}
      fileName="IconButton.jsx"
    />
  );
}