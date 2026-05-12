export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-[#fff3e7]">

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

        {/* Hero Section */}
        <section className="space-y-10">

          {/* Heading */}
          <div>
            <h1 className="text-7xl font-black tracking-tight text-secondary">
              Button
            </h1>

            <p className="mt-6 max-w-3xl text-2xl leading-relaxed text-secondary/70">
              Buttons allow users to take actions and make choices with a
              single tap.
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
                  Reusable modern button components built using React and
                  Tailwind CSS.
                </h2>

                <p className="mt-6 max-w-4xl text-lg leading-relaxed text-secondary/70">
                  Includes multiple styles, variants, icon support, glow
                  effects, outline buttons and interactive states.
                </p>

              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-xl leading-relaxed text-secondary/70">

            <p>
              Buttons communicate actions that users can take. They are
              typically placed throughout your UI in places like:
            </p>

            <ul className="list-disc space-y-4 pl-8">
              <li>Modal windows</li>
              <li>Forms</li>
              <li>Cards</li>
              <li>Toolbars</li>
              <li>Navigation sections</li>
            </ul>

          </div>
        </section>
      </div>
    </div>
  );
}