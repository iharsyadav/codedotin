// import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

// export default function GlassBackground() {

//   const preview = (
//     <div className="flex justify-center">

//       {/* Gradient Border */}
//       <div
//         className="
//           rounded-[28px]
//           border
//           border-blue-600
//           bg-gradient-to-br
//           from-pink-600
//           via-rose-500
//           to-orange-500
//           p-[1px]
//           shadow-[0_10px_40px_rgba(0,0,0,0.15)]
//         "
//       >

//         {/* Glass Card */}
//         <div
//           className="
//             rounded-[28px]
//             bg-[#0f0f0f]/45
//             px-10
//             py-8
//             backdrop-blur-[30px]
//           "
//         >

//           <h2 className="text-5xl font-black text-white">
//             Simple Card
//           </h2>

//           <p className="mt-5 max-w-md text-lg leading-8 text-white/80">
//             This is a simple card using your exact glass
//             color and border.
//           </p>

//         </div>

//       </div>

//     </div>
//   );

//   return (
//     <ComponentPreview
//       title="Glass Background"
//       description="Simple colorful glass background section."
//       preview={preview}
//       code={`backdrop-blur-[30px]`}
//       fileName="GlassBackground.jsx"
//     />
//   );
// }

// GlassBackground.jsx

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlassBackground() {
  const preview = (
    <div className="flex justify-center">
      {/* Gradient Border */}
      <div
        className="
          rounded-[28px]
          border
          border-blue-600
         bg-[linear-gradient(320deg,#f27121,#e94057,#8a2387)]
          p-[1px]
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        "
      >
        {/* Glass Card */}
        <div
          className="
            rounded-[28px]
            px-10
            py-8
             bg-[rgba(91,49,168,0.44)]
    shadow-[0_4px_30px_rgba(0,0,0,0.1)]
    backdrop-blur-0
    border
    border-[rgba(91,49,168,1)]
    text-white
           
          "
        >
          <h2 className="text-5xl font-black text-white">Simple Card</h2>

          <p className="mt-5 max-w-md text-lg leading-8 text-white/80">
            This is a simple card using your exact glass color and border.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <ComponentPreview
      title="Glass Background"
      description="Simple colorful glass background section."
      preview={preview}
      code={`backdrop-blur-[40px]`}
      fileName="GlassBackground.jsx"
    />
  );
}
