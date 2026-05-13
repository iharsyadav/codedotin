import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Message() {
  const messageCode = ``;

  const messagePreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Message"
      description="Modern message component built using React and Tailwind CSS."
      preview={messagePreview}
      code={messageCode}
      fileName="Message.jsx"
    />
  );
}
