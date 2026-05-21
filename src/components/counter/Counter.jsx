import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Counter() {
  const counterCode = ``;

  const counterPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Counter"
      description="Modern counter component built using React and Tailwind CSS."
      preview={counterPreview}
      code={counterCode}
      fileName="Counter.jsx"
    />
  );
}
