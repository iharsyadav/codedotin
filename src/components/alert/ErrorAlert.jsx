// ErrorAlert.jsx

import { CircleX } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function ErrorAlert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] border border-red-200 bg-red-50 p-5">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100">
        <CircleX size={18} className="text-red-700" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-red-800">
          Error Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-red-700">
          Something went wrong while processing request.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Error Alert"
      description="Error alert component."
      preview={alertPreview}
      code={`<div className="bg-red-50"></div>`}
      fileName="ErrorAlert.jsx"
    />
  );
}