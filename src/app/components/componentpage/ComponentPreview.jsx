// src/components/ui/ComponentPreview.jsx

import { useState } from "react";

export default function ComponentPreview({
  title,
  description,
  preview,
  code,
  fileName = "Component.jsx",
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="mt-14">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-secondary">
            {title}
          </h2>

          <p className="mt-2 text-base leading-relaxed text-secondary/70">
            {description}
          </p>
        </div>

        <button
          onClick={() => setShowCode(!showCode)}
          className="rounded-2xl bg-secondary px-5 py-2.5 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:scale-105"
        >
          {showCode ? "Preview" : "Code"}
        </button>
      </div>

      {/* Showcase */}
      <div className="mt-8 overflow-hidden rounded-[32px] border border-secondary/10 bg-[#f8efe6] shadow-xl">
        
        {/* Preview Section */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            showCode
              ? "max-h-0 overflow-hidden opacity-0"
              : "max-h-[600px] opacity-100"
          }`}
        >
          <div className=" p-10">
            {preview}
          </div>
        </div>

        {/* Code Section */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            showCode
              ? "max-h-[1200px] opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="bg-[#381932]">
            
            {/* File Name */}
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm font-medium text-[#fff3e7]">
                {fileName}
              </p>
            </div>

            {/* Code Block */}
            <pre className="overflow-x-auto p-6 text-sm leading-7 text-[#fff3e7]">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}