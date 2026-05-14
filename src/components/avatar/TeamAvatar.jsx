// TeamAvatar.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function TeamAvatar() {

  const preview = (
    <div className="flex gap-8">

      <div className="rounded-[28px] bg-white p-5 shadow-xl">

        <img
          src="https://i.pravatar.cc/150?img=5"
          alt=""
          className="h-24 w-24 rounded-2xl object-cover"
        />

        <h3 className="mt-4 text-lg font-bold text-[#381932]">
          Olivia
        </h3>

        <p className="text-sm text-zinc-500">
          UI Designer
        </p>

      </div>

      <div className="rounded-[28px] bg-white p-5 shadow-xl">

        <img
          src="https://i.pravatar.cc/150?img=9"
          alt=""
          className="h-24 w-24 rounded-2xl object-cover"
        />

        <h3 className="mt-4 text-lg font-bold text-[#381932]">
          James
        </h3>

        <p className="text-sm text-zinc-500">
          Developer
        </p>

      </div>

      <div className="rounded-[28px] bg-white p-5 shadow-xl">

        <img
          src="https://i.pravatar.cc/150?img=16"
          alt=""
          className="h-24 w-24 rounded-2xl object-cover"
        />

        <h3 className="mt-4 text-lg font-bold text-[#381932]">
          Emma
        </h3>

        <p className="text-sm text-zinc-500">
          Product Lead
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Team Avatars"
      description="Team member cards."
      preview={preview}
      code={`rounded-2xl`}
      fileName="TeamAvatar.jsx"
    />
  );
}