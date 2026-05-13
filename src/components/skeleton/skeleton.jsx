import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function Skeleton() {
  const skeletonCode = ``;

  const skeletonPreview = (
    <>
    </>
  );

  return (
    <ComponentPreview
      title="Skeleton"
      description="Modern skeleton component built using React and Tailwind CSS."
      preview={skeletonPreview}
      code={skeletonCode}
      fileName="Skeleton.jsx"
    />
  );
}
