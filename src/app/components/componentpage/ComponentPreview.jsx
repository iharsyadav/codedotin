import { useState } from "react";

import { Copy, Moon,} from "lucide-react";

export default function ComponentPreview({
  title,
  description,
  children,
  code,
}) {
  const [tab, setTab] = useState("preview");

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <section className="space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between gap-6">

        <div>
          <h2 className="text-3xl font-black tracking-tight">
            {title}
          </h2>

          {description && (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              {description}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          <button className="rounded-xl border border-border bg-surface p-3 transition hover:border-secondary">
            <Moon size={16} />
          </button>

          <button
            onClick={copyCode}
            className="rounded-xl border border-border bg-surface p-3 transition hover:border-secondary"
          >
            <Copy size={16} />
          </button>

          <div className="flex items-center rounded-2xl border border-border bg-surface p-1">

            <button
              onClick={() => setTab("preview")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                tab === "preview"
                  ? "bg-secondary text-primary"
                  : "text-text-muted"
              }`}
            >
              Preview
            </button>

            <button
              onClick={() => setTab("code")}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                tab === "code"
                  ? "bg-secondary text-primary"
                  : "text-text-muted"
              }`}
            >
              Code
            </button>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="overflow-hidden rounded-[32px] border border-border bg-surface">

        {/* Preview */}
        {tab === "preview" && (
          <div className="flex min-h-[400px] items-center justify-center p-12 lg:p-20">
            {children}
          </div>
        )}

        {/* Code */}
        {tab === "code" && (
          <div className="overflow-x-auto p-8">
            <pre className="text-sm leading-8 text-secondary">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}