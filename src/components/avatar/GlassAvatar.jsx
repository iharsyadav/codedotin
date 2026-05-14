// GlassAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlassAvatar() {

  const preview = (
    <div className="flex items-center gap-6 rounded-[32px] bg-gradient-to-br from-pink-600 via-rose-500 to-orange-500 p-10">

      <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-2xl">

        <img
          src="https://i.pravatar.cc/150?img=33"
          alt=""
          className="h-20 w-20 rounded-full object-cover"
        />

      </div>

      <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-2xl">

        <img
          src="https://i.pravatar.cc/150?img=44"
          alt=""
          className="h-20 w-20 rounded-full object-cover"
        />

      </div>

      <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-2xl">

        <img
          src="https://i.pravatar.cc/150?img=11"
          alt=""
          className="h-20 w-20 rounded-full object-cover"
        />

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Glass Avatars"
      description="Premium glassmorphism avatars."
      preview={preview}
      code={`backdrop-blur-2xl`}
      fileName="GlassAvatar.jsx"
    />
  );
}