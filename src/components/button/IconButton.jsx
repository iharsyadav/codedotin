import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Button() {
  const buttonCode = `
    <button className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 text-sm font-bold text-zinc-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      Hover Me
    </button>
`;

  const buttonPreview = (
    <>
     <button className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 text-sm font-bold text-zinc-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      Hover hi
    </button>
     <button className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 text-sm font-bold text-zinc-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      Hover hi
    </button>
    <button className="rounded-xl border border-amber-300 bg-transparent px-6 py-2.5 text-sm font-semibold text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-zinc-900 hover:shadow-lg">
      Primary
    </button>
    </>
   
  );

  return (
    <ComponentPreview
      title="Button"
      description="Modern animated gradient button built using React and Tailwind CSS."
      preview={buttonPreview}
      code={buttonCode}
      fileName="Button.jsx"
    />
  );
}