export default function CardPage() {
  return (
    <div className="min-h-screen bg-[#fff3e7]">

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

        {/* Hero Section */}
        <section className="space-y-10">

          {/* Heading */}
          <div>
            <h1 className="text-7xl font-black tracking-tight text-secondary">
              Card
            </h1>

            <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-secondary/70">
              Cards are flexible containers used to group related content,
              actions, and information together.
            </p>
          </div>

          {/* Info Box */}
          <div className="rounded-[40px] border border-secondary/10 bg-white p-8 shadow-xl lg:p-10">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

              {/* Icon */}
              <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-[32px] bg-secondary text-6xl font-black text-primary shadow-2xl">
                UI
              </div>

              {/* Content */}
              <div>

                <h2 className="text-4xl font-black leading-tight text-secondary">
                  Modern reusable card components built using React and
                  Tailwind CSS.
                </h2>

                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/70">
                  Includes profile cards, pricing cards, dashboard cards,
                  glass cards, project cards and interactive layouts.
                </p>

              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-xl leading-relaxed text-secondary/70">

            <p>
              Cards help organize UI content into clean structured sections.
              They are commonly used in:
            </p>

            <ul className="list-disc space-y-4 pl-8">
              <li>Dashboards</li>
              <li>Pricing sections</li>
              <li>Profile layouts</li>
              <li>Blog previews</li>
              <li>Project showcases</li>
            </ul>

          </div>
        </section>
      </div>
    </div>
  );
}