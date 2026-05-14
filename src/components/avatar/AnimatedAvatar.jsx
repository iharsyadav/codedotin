// AnimatedAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function AnimatedAvatar() {

  const preview = (
    <div className="flex items-center gap-8">

      <div className="group relative">

        <div className="absolute inset-0 animate-pulse rounded-full bg-pink-500 blur-2xl opacity-50" />

        <img
          src="https://i.pravatar.cc/150?img=50"
          alt=""
          className="relative h-24 w-24 rounded-full border-4 border-white object-cover transition-all duration-500 group-hover:-translate-y-2"
        />

      </div>

      <div className="group relative">

        <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500 blur-2xl opacity-50" />

        <img
          src="https://i.pravatar.cc/150?img=14"
          alt=""
          className="relative h-24 w-24 rounded-full border-4 border-white object-cover transition-all duration-500 group-hover:rotate-6"
        />

      </div>

      <div className="group relative">

        <div className="absolute inset-0 animate-pulse rounded-full bg-violet-500 blur-2xl opacity-50" />

        <img
          src="https://i.pravatar.cc/150?img=8"
          alt=""
          className="relative h-24 w-24 rounded-full border-4 border-white object-cover transition-all duration-500 group-hover:scale-110"
        />

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Animated Avatars"
      description="Animated modern avatars."
      preview={preview}
      code={`animate-pulse`}
      fileName="AnimatedAvatar.jsx"
    />
  );
}