import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function GlowButton() {
  const buttonCode = `
    <button className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-3 text-sm font-bold text-zinc-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      Hover Me
    </button>
`;

  const buttonPreview = (
    <>
      <button className="rounded-2xl bg-secondary px-6 py-3 text-sm font-semibold text-primary shadow-[0_0_30px_rgba(56,25,50,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,25,50,0.6)]">
    Glow
  </button>
  
    </>
   
  );

  return (
    <ComponentPreview
      title="GlowButton"
      description="Modern animated gradient button built using React and Tailwind CSS."
      preview={buttonPreview}
      code={buttonCode}
      fileName="GlowButton.jsx"
    />
  );
}