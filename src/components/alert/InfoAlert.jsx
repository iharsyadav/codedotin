// InfoAlert.jsx

import { Info } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function InfoAlert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] border border-blue-200 bg-blue-50 p-5">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
        <Info size={18} className="text-blue-700" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-blue-800">
          Info Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-blue-700">
          New update available for your dashboard.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Info Alert"
      description="Information alert component."
      preview={alertPreview}
      code={`<div className="bg-blue-50"></div>`}
      fileName="InfoAlert.jsx"
    />
  );
}