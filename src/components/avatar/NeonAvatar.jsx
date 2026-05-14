// NeonAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function NeonAvatar() {

  const preview = (
    <div className="flex gap-8 rounded-[32px] bg-black p-10">

      <img
        src="https://i.pravatar.cc/150?img=70"
        alt=""
        className="h-24 w-24 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_40px_rgba(0,255,255,0.45)]"
      />

      <img
        src="https://i.pravatar.cc/150?img=71"
        alt=""
        className="h-24 w-24 rounded-full border-4 border-pink-500 object-cover shadow-[0_0_40px_rgba(255,0,140,0.45)]"
      />

      <img
        src="https://i.pravatar.cc/150?img=72"
        alt=""
        className="h-24 w-24 rounded-full border-4 border-violet-500 object-cover shadow-[0_0_40px_rgba(120,0,255,0.45)]"
      />

    </div>
  );

  return (
    <ComponentPreview
      title="Neon Avatars"
      description="Cyberpunk neon avatars."
      preview={preview}
      code={`shadow-[0_0_40px_rgba()]`}
      fileName="NeonAvatar.jsx"
    />
  );
}