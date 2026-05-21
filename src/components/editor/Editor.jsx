import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Editor() {
  const editorCode = ``;

  const editorPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Editor"
      description="Modern editor component built using React and Tailwind CSS."
      preview={editorPreview}
      code={editorCode}
      fileName="Editor.jsx"
    />
  );
}
