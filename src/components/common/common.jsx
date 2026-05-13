import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Common() {
  const commonCode = ``;

  const commonPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Common"
      description="Modern common component built using React and Tailwind CSS."
      preview={commonPreview}
      code={commonCode}
      fileName="Common.jsx"
    />
  );
}
