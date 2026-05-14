// SocialAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SocialAvatar() {

  const preview = (
    <div className="flex items-center gap-6">

      <div className="group relative">

        <div className="absolute inset-0 rounded-full bg-pink-500 blur-xl opacity-40 transition-all duration-500 group-hover:opacity-70" />

        <img
          src="https://i.pravatar.cc/150?img=32"
          alt=""
          className="relative h-20 w-20 rounded-full border-4 border-white object-cover"
        />

      </div>

      <div className="group relative">

        <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-40 transition-all duration-500 group-hover:opacity-70" />

        <img
          src="https://i.pravatar.cc/150?img=15"
          alt=""
          className="relative h-20 w-20 rounded-full border-4 border-white object-cover"
        />

      </div>

      <div className="group relative">

        <div className="absolute inset-0 rounded-full bg-orange-400 blur-xl opacity-40 transition-all duration-500 group-hover:opacity-70" />

        <img
          src="https://i.pravatar.cc/150?img=48"
          alt=""
          className="relative h-20 w-20 rounded-full border-4 border-white object-cover"
        />

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Social Avatars"
      description="Modern social media avatars."
      preview={preview}
      code={`rounded-full`}
      fileName="SocialAvatar.jsx"
    />
  );
}