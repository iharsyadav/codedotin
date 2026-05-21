import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Code() {
  const codeCode = ``;

  const codePreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Code"
      description="Modern code component built using React and Tailwind CSS."
      preview={codePreview}
      code={codeCode}
      fileName="Code.jsx"
    />
  );
}
