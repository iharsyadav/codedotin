// GamingAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GamingAvatar() {

  const preview = (
    <div className="flex items-center gap-6 rounded-[32px] bg-black p-10">

      <div className="group relative">

        <div className="absolute inset-0 rounded-full bg-violet-500 blur-2xl opacity-50 group-hover:opacity-100" />

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="relative h-24 w-24 rounded-full border-4 border-violet-500 object-cover transition-all duration-300 group-hover:scale-110"
        />

      </div>

      <div className="group relative">

        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl opacity-50 group-hover:opacity-100" />

        <img
          src="https://i.pravatar.cc/150?img=60"
          alt=""
          className="relative h-24 w-24 rounded-full border-4 border-cyan-500 object-cover transition-all duration-300 group-hover:scale-110"
        />

      </div>

      <div className="group relative">

        <div className="absolute inset-0 rounded-full bg-pink-500 blur-2xl opacity-50 group-hover:opacity-100" />

        <img
          src="https://i.pravatar.cc/150?img=22"
          alt=""
          className="relative h-24 w-24 rounded-full border-4 border-pink-500 object-cover transition-all duration-300 group-hover:scale-110"
        />

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Gaming Avatars"
      description="Gaming neon avatars."
      preview={preview}
      code={`group-hover:scale-110`}
      fileName="GamingAvatar.jsx"
    />
  );
}