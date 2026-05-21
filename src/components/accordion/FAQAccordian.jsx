import { useState } from "react";

import { ChevronDown } from "lucide-react";

import ComponentPreview from "../../app/components/componentpage/ComponentPreview";

export default function FaqAccordion() {

  const [open, setOpen] = useState(0);

  const faqItems = [
    {
      question: "What subscription plans do you offer?",
      answer:
        "We offer free, pro and enterprise plans for different user needs.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is processed monthly or yearly depending on your selected plan.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime from account settings.",
    },
  ];

  const accordionCode = `
const faqItems = [
  {
    question: "What subscription plans do you offer?",
    answer: "We offer free, pro and enterprise plans."
  }
];
`;

  const accordionPreview = (
   <div className="w-full max-w-2xl rounded-[24px] bg-[#111111] p-6 shadow-2xl">

  {/* Header */}
  <div>

    <h2 className="text-2xl font-bold text-white">
      Subscription & Billing
    </h2>

    <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">
      Common questions about your account, plans,
      payments and cancellations.
    </p>

  </div>

  {/* Accordion */}
  <div className="mt-7">

    {faqItems.map((item, index) => (
      <div
        key={index}
        className="border-b border-white/10"
      >

        <button
          onClick={() => setOpen(open === index ? null : index)}
          className="flex w-full items-center justify-between py-5 text-left"
        >

          <span className="text-base font-semibold text-white">
            {item.question}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 text-white/60 ${
              open === index ? "rotate-180" : ""
            }`}
          />

        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open === index
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >

          <div className="overflow-hidden">

            <p className="pr-6 text-sm leading-relaxed text-white/60">
              {item.answer}
            </p>

          </div>

        </div>

      </div>
    ))}

  </div>

</div>
  );

  return (
    <ComponentPreview
      title="Accordion"
      description="Modern FAQ accordion component built using React and Tailwind CSS."
      preview={accordionPreview}
      code={accordionCode}
      fileName="FaqAccordion.jsx"
    />
  );
}