// OnlineAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function OnlineAvatar() {

  const preview = (
    <div className="flex gap-8">

      <div className="relative">

        <img
          src="https://i.pravatar.cc/150?img=24"
          alt=""
          className="h-24 w-24 rounded-full object-cover"
        />

        <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-emerald-500" />

      </div>

      <div className="relative">

        <img
          src="https://i.pravatar.cc/150?img=28"
          alt=""
          className="h-24 w-24 rounded-full object-cover"
        />

        <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-yellow-400" />

      </div>

      <div className="relative">

        <img
          src="https://i.pravatar.cc/150?img=31"
          alt=""
          className="h-24 w-24 rounded-full object-cover"
        />

        <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-red-500" />

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Online Avatars"
      description="Presence status avatars."
      preview={preview}
      code={`absolute bottom-1 right-1`}
      fileName="OnlineAvatar.jsx"
    />
  );
}