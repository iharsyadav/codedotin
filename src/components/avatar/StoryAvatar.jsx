// StoryAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function StoryAvatar() {

  const preview = (
    <div className="flex gap-6">

      <div className="rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-violet-600 p-[3px]">

        <img
          src="https://i.pravatar.cc/150?img=61"
          alt=""
          className="h-24 w-24 rounded-full border-4 border-white object-cover"
        />

      </div>

      <div className="rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 p-[3px]">

        <img
          src="https://i.pravatar.cc/150?img=18"
          alt=""
          className="h-24 w-24 rounded-full border-4 border-white object-cover"
        />

      </div>

      <div className="rounded-full bg-gradient-to-tr from-orange-400 via-red-500 to-pink-600 p-[3px]">

        <img
          src="https://i.pravatar.cc/150?img=45"
          alt=""
          className="h-24 w-24 rounded-full border-4 border-white object-cover"
        />

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Story Avatars"
      description="Instagram style story avatars."
      preview={preview}
      code={`bg-gradient-to-tr`}
      fileName="StoryAvatar.jsx"
    />
  );
}