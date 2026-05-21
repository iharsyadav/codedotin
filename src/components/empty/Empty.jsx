import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Empty() {
  const emptyCode = ``;

  const emptyPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Empty"
      description="Modern empty component built using React and Tailwind CSS."
      preview={emptyPreview}
      code={emptyCode}
      fileName="Empty.jsx"
    />
  );
}
