// SuccessAlert.jsx

import { Check } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function SuccessAlert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] border border-green-200 bg-green-50 p-5">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
        <Check size={18} className="text-green-700" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-green-800">
          Success Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-green-700">
          Your changes have been saved successfully.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Success Alert"
      description="Success alert component."
      preview={alertPreview}
      code={`<div className="bg-green-50"></div>`}
      fileName="SuccessAlert.jsx"
    />
  );
}