import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Loader() {
  const loaderCode = ``;

  const loaderPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Loader"
      description="Modern loader component built using React and Tailwind CSS."
      preview={loaderPreview}
      code={loaderCode}
      fileName="Loader.jsx"
    />
  );
}
