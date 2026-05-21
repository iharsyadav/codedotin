import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Textarea() {
  const textareaCode = ``;

  const textareaPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Textarea"
      description="Modern textarea component built using React and Tailwind CSS."
      preview={textareaPreview}
      code={textareaCode}
      fileName="Textarea.jsx"
    />
  );
}
