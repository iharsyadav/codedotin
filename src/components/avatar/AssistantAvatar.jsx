// AssistantAvatar.jsx

import { Sparkles } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function AssistantAvatar() {

  const preview = (
    <div className="flex gap-6">

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_0_40px_rgba(0,255,255,0.35)]">
        <Sparkles size={40} />
      </div>

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_0_40px_rgba(120,0,255,0.35)]">
        <Sparkles size={40} />
      </div>

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-[0_0_40px_rgba(255,120,80,0.35)]">
        <Sparkles size={40} />
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Assistant Avatars"
      description="AI assistant style avatars."
      preview={preview}
      code={`bg-gradient-to-br`}
      fileName="AssistantAvatar.jsx"
    />
  );
}