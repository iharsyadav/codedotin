// TrendingBadge.jsx

import { TrendingUp } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function TrendingBadge() {

  const preview = (
    <div className="flex items-center justify-center gap-2 rounded-full bg-[#fff3e7] px-5 py-2 text-sm font-semibold text-[#381932]">

      <TrendingUp size={16} />

      Trending

    </div>
  );

  return (
    <ComponentPreview
      title="Trending Badge"
      description="Trending badge component."
      preview={preview}
      code={`<TrendingUp />`}
      fileName="TrendingBadge.jsx"
    />
  );
}