// import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

// export default function Alert() {
//   const alertCode = ``;

//   const alertPreview = (
//     <>
//     </>
//   );

//   return (
//     <ComponentPreview
//       title="Alert"
//       description="Modern alert component built using React and Tailwind CSS."
//       preview={alertPreview}
//       code={alertCode}
//       fileName="Alert.jsx"
//     />
//   );
// }
// Alert.jsx

import { TriangleAlert } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Alert() {

  const alertPreview = (
    <div className="flex w-full max-w-lg items-start gap-4 rounded-[24px] border border-[#381932]/10 bg-white p-5 shadow-[0_10px_40px_rgba(56,25,50,0.12)]">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff3e7]">
        <TriangleAlert size={20} className="text-[#381932]" />
      </div>

      <div>

        <h3 className="text-sm font-bold text-[#381932]">
          Default Alert
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#6b5565]">
          Modern reusable alert component.
        </p>

      </div>

    </div>
  );

  return (
    <ComponentPreview
      title="Alert"
      description="Basic alert component."
      preview={alertPreview}
      code={`<div className="bg-white"></div>`}
      fileName="Alert.jsx"
    />
  );
}
