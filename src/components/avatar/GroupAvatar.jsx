// GroupAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GroupAvatar() {

  const preview = (
    <div className="flex items-center">

      <img
        src="https://i.pravatar.cc/150?img=10"
        alt=""
        className="h-20 w-20 rounded-full border-4 border-white object-cover"
      />

      <img
        src="https://i.pravatar.cc/150?img=20"
        alt=""
        className="-ml-6 h-20 w-20 rounded-full border-4 border-white object-cover"
      />

      <img
        src="https://i.pravatar.cc/150?img=30"
        alt=""
        className="-ml-6 h-20 w-20 rounded-full border-4 border-white object-cover"
      />

      <div className="-ml-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#381932] text-lg font-bold text-white">
        +8
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Group Avatars"
      description="Team group avatars."
      preview={preview}
      code={`-ml-6`}
      fileName="GroupAvatar.jsx"
    />
  );
}