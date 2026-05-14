// NotificationBadge.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function NotificationBadge() {

  const preview = (
    <div className="relative flex justify-center">

      <button className="rounded-2xl bg-white px-6 py-3 shadow-lg">
        Inbox
      </button>

      <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
        3
      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Notification Badge"
      description="Notification badge component."
      preview={preview}
      code={`absolute -top-2 -right-2`}
      fileName="NotificationBadge.jsx"
    />
  );
}