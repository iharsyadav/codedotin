import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Error() {
  const errorCode = ``;

  const errorPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Error"
      description="Modern error component built using React and Tailwind CSS."
      preview={errorPreview}
      code={errorCode}
      fileName="Error.jsx"
    />
  );
}
