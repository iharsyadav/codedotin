// WarningAlert.jsx

import { TriangleAlert } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function WarningAlert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] border border-amber-200 bg-amber-50 p-5">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">
        <TriangleAlert size={18} className="text-amber-700" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-amber-800">
          Warning Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-amber-700">
          Please review your information before continuing.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Warning Alert"
      description="Warning alert component."
      preview={alertPreview}
      code={`<div className="bg-amber-50"></div>`}
      fileName="WarningAlert.jsx"
    />
  );
}